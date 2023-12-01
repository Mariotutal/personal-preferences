import { useQuery, UseQueryResult } from 'react-query';
import { fetchRecords, Person } from '../../service/api';
import { useState } from 'react';
import './table.scss';

const Table = () => {
  // State for sorting field
  const [sortBy, setSortBy] = useState<string>('');

  // Fetch records using React Query
  const {
    data: records,
    isLoading,
    isError,
  }: UseQueryResult<Person[], unknown> = useQuery(['records', sortBy], () =>
    fetchRecords(sortBy),
  );

  // Handler for sorting
  const handleSort = (field: string) => {
    setSortBy(field);
  };

  // Loading state
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Error state
  if (isError) {
    return <p>Error loading records.</p>;
  }

  // Function to render table cell content, handling different data types
  const renderTableCell = (value: string | number | Date | undefined) => {
    if (value instanceof Date) {
      // If the value is a Date, format it
      return value.toLocaleString();
    }
    // If the value is falsy or undefined, display 'N/A'
    return value || 'N/A';
  };

  return (
    <div className="records-container">
      {/* Header */}
      <h2>Records</h2>

      {/* Sort buttons */}
      <div className="sort-buttons">
        <h3>Sort by:</h3>
        {['Name', 'Favorite Food', 'Favorite Movie', 'Status', 'Date'].map(
          (field) => (
            <button key={field} type="button" onClick={() => handleSort(field)}>
              {field}
            </button>
          ),
        )}
      </div>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Favorite Food</th>
            <th>Favorite Movie</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {/* Rows */}
          {records?.map((record) => (
            <tr key={record.Name}>
              <td>{record.Name}</td>
              <td>{record['Favorite Food']}</td>
              <td>{record['Favorite Movie']}</td>
              <td>{record.Status}</td>
              {/* Render table cell content */}
              <td>{renderTableCell(record.Date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
