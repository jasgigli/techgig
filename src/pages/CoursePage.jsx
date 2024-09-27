import React from "react";

const CoursePage = ({ course }) => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">{course.title}</h1>
      <div className="space-y-4">
        {course.lessons.map((lesson, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">{lesson.title}</h2>
            <p className="mt-2">{lesson.description}</p>
            <a href={lesson.link} className="text-blue-500 hover:underline">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePage;
