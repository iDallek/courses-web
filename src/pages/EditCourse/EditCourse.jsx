import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/Header';
import { fetchDataWithParams, putData } from '../../helper/axios';

const EditCourse = () => {
  const headerProps = {
    title: 'Alterar Curso',
  };

  const [code, setCode] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const courseData = await fetchDataWithParams('http://localhost:3004/curso', id);

      setCode(courseData?.idcurso);
      setTitle(courseData?.ds_titulo);
      setDescription(courseData?.ds_descricao);
    };

    fetchData();
  }, []);

  const [disableBtn, setDisableBtn] = React.useState(true);

  useEffect(() => {
    if (code && title && description) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [code, title, description]);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    await putData('http://localhost:3004/curso', id, {
      idcurso: parseInt(code, 10),
      ds_titulo: title,
      ds_descricao: description,
    });

    navigate('/');
  };

  return (
    <div data-testid="edit-course-component">
      <div>
        <Header props={headerProps} />
        <button
          type="button"
          className="mx-3"
          disabled={disableBtn}
          onClick={handleSubmit}
        >
          Salvar
        </button>
      </div>
      <form>
        <div className="form-group flex">
          <label htmlFor="id">
            Código
            <input
              id="id"
              type="number"
              placeholder="Código"
              data-testid="id-input"
              onChange={({ target }) => setCode(target.value)}
              value={code}
            />
          </label>
          <label htmlFor="title">
            Título
            <input
              id="title"
              type="text"
              placeholder="Título"
              data-testid="title-input"
              onChange={({ target }) => setTitle(target.value)}
              value={title}
            />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea
              id="description"
              rows="3"
              placeholder="Descrição"
              data-testid="description-input"
              onChange={({ target }) => setDescription(target.value)}
              value={description}
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default EditCourse;
