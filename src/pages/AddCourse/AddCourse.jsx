import React, { useEffect } from 'react';
import Header from '../../components/Header';

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

  return (
    <div data-testid="add-course-component">
      <div className="flex justify-between">
        <Header props={headerProps} />
        <button disabled={disableBtn} type="button" className="mx-3">
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
