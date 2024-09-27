import React from "react";
import { useParams } from "react-router-dom";

const courses = {
  theory: ["Computer Hardware", "Software Engineering", "Networking"],
  practicals: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
  articles: ["Latest Tech Articles", "Programming Tips", "Project Ideas"],
};

const CategoryPage = () => {
  const { category } = useParams();
  const categoryCourses = courses[category] || [];

  return (
    <div className="category-container">
      <h2>{category.toUpperCase()} Courses</h2>
      <ul>
        {categoryCourses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
