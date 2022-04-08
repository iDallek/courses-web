import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';
import CourseCard from '../../components/CourseCard';
import Header from '../../components/Header';
import { fetchData } from '../../helper/axios';

const HomePage = () => {
  const headerProps = {
    title: 'Cursos',
    links: [
      { label: '+ Adicionar', href: '/add' },
    ],
  };

  const [courses, setCourses] = React.useState([]);

  useEffect(() => {
    const fetch = async () => {
      const apiUrl = 'http://localhost:3004/curso';

      setCourses(await fetchData(apiUrl));
    };

    fetch();
  }, []);

  const navigate = useNavigate();

  return (
    <main className="w-full" data-testid="HomePage">
      <Header props={headerProps} />
      <div>
        {courses?.map((course) => {
          const courseCardProps = {
            id: course.idcurso,
            title: course.ds_titulo,
            description: course.ds_descricao,
            onClick: () => navigate(`/course/${course.idcurso}`),
          };

          return <CourseCard key={course.idcurso} content={courseCardProps} />;
        })}
      </div>
    </main>
  );
};

export default HomePage;
