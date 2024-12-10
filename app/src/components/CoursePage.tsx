import React from 'react';
import { useParams } from 'react-router-dom';

interface CoursePageProps {
    updateProgress: (courseId: number) => void;
}

const CoursePage = ({ updateProgress }: CoursePageProps): JSX.Element => {
    const { courseId } = useParams<{ courseId: string }>();

    const handleCompleteSection = () => {
        updateProgress(Number(courseId)); // Update progress for this course
    };

    return (
        <div>
            <h2>Course Content for Course ID: {courseId}</h2>
            <p>Complete the lessons or exercises to progress in the course.</p>
            <button onClick={handleCompleteSection}>Complete Section</button>
        </div>
    );
};

export default CoursePage;
