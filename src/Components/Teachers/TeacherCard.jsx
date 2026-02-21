import React from "react";
import "./TeacherCard.css";

const TeacherCard = ({ teacher }) => {
  return (
    <article className="teacher-card">
      <div className="teacher-img-wrapper">
        <img src={teacher.image} alt={teacher.name} />

        {teacher.category === "senior" && (
          <span className="badge">Senior Staff</span>
        )}
      </div>

      <div className="teacher-content">
        <h3>{teacher.name}</h3>
        <p className="role">{teacher.role}</p>

        <p><strong>Subject:</strong> {teacher.subject}</p>
        <p><strong>Qualification:</strong> {teacher.qualification}</p>
        <p><strong>Experience:</strong> {teacher.experience}</p>

        <p className="bio">{teacher.bio}</p>
      </div>
    </article>
  );
};

export default TeacherCard;
