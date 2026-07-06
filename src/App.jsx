import { useEffect, useState } from 'react';
import { courseService } from './services/courseService';

function App() {
  // 1. Phải khai báo các State này thì bên dưới mới dùng được
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await courseService.getAllCourses();
        console.log("Dữ liệu nhận về từ API:", data);
        
        if (Array.isArray(data)) {
          setCourses(data);
        } else {
          setError("Dữ liệu API trả về không phải là một mảng (Array)!");
        }
      } catch (err) {
        console.error("Lỗi gọi API rồi:", err);
        setError(err.message || "Không thể kết nối tới MockAPI!");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  // 2. Các điều kiện hiển thị giao diện
  if (loading) return <div style={{ padding: '20px', textAlign: 'center' }}>Đang tải dữ liệu từ MockAPI...</div>;
  if (error) return <div style={{ padding: '20px', color: 'red', textAlign: 'center' }}>❌ Lỗi: {error}</div>;

  return (
    <div style={{ padding: '30px', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#2563eb', marginBottom: '20px' }}>🎯 Test MockAPI thành công!</h1>
      <h2>Danh sách khóa học ({courses.length}):</h2>
      
      {courses.length === 0 ? (
        <p>Mảng rỗng. Bạn chưa thêm dữ liệu nào trên MockAPI.io!</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
          {courses.map((course) => (
            <div key={course.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
              <h3 style={{ margin: '0 0 10px 0' }}>{course.title || "Chưa có tiêu đề"}</h3>
              <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>{course.description || "Chưa có mô tả"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;