import css from './style/Form.module.css';
const Filter = ({ value, onChange }) => {
  return (
    <label className={css.label}>
      Find contacts by name:
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
export { Filter };
