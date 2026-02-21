import teachersData from "../Data/TeachersData";
import TeacherCard from "../Components/Teachers/TeacherCard";
import "./Teachers.css";

const Teachers = () => {
  const seniorStaff = teachersData.filter(
    teacher => teacher.category === "senior"
  );

  const teachingStaff = teachersData.filter(
    teacher => teacher.category === "teaching"
  );

  const supportStaff = teachersData.filter(
    teacher => teacher.category === "support"
  );

  return (
    <main className="teachers-page">
      {/* Hero Section */}
      <section className="teachers-hero">
        <h1>Our Staff</h1>
        <p>
          Meet our dedicated team committed to academic excellence and
          student success at Crestwood Academy.
        </p>
      </section>

      {/* Senior Staff */}
      <section className="staff-section">
        <h2>Senior Leadership Team</h2>
        <div className="staff-grid">
          {seniorStaff.map(teacher => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </section>

      {/* Teaching Staff */}
      <section className="staff-section">
        <h2>Teaching Staff</h2>
        <div className="staff-grid">
          {teachingStaff.map(teacher => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </section>

      {/* Support Staff */}
      <section className="staff-section">
        <h2>Support Staff</h2>
        <div className="staff-grid">
          {supportStaff.map(teacher => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Teachers;
