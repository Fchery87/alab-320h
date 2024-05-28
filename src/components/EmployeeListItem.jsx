import PropTypes from 'prop-types';

function EmployeeListItem({ employee }) {
  return (
    <div className="employee-list-item">
      <div className="employee-avatar"></div>
      <div className="employee-info">
        <h2>{employee.name}</h2>
        <p>{employee.title}</p>
      </div>
    </div>
  );
}

EmployeeListItem.propTypes = {
  employee: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }).isRequired
};

export default EmployeeListItem;
