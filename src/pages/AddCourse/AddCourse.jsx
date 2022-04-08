import React, { useEffect } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
import regeneratorRuntime from 'regenerator-runtime';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';
import { postData } from '../../helper/axios';

const AddCourse = () => {
  const headerProps = {
    title: 'Cursos',
  };

  const [code, setCode] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');

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
    await postData('http://localhost:3004/curso', {
      idcurso: parseInt(code, 10),
      ds_titulo: title,
      ds_descricao: description,
    });

    navigate('/');
  };

  return (
    <div data-testid="add-course-component">
      <div className="flex justify-between">
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

      <div>
        <h1>Adicionar Curso</h1>
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
    </div>
  );
};

export default AddCourse;
