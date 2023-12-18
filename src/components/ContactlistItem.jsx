import css from './style/ContactListItem.module.css'
const ContactListItem = ({ id, name, number, onDelete }) => {
    return (
        <li className={css.listItem}>
        <span className={css.contactInfo}>{name}: {number}</span>
        <button onClick={() => onDelete(id)} className={css.deleteButton}>Delete</button>
    </li>
    );
};
export{ContactListItem}