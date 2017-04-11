/**
 *
 * TableHeader
 *
 */

import React from 'react';

import styles from './styles.scss';

class TableHeader extends React.Component { // eslint-disable-line react/prefer-stateless-function
  changeSort(name) {
    if (this.props.sort === name) {
      this.props.changeSort(`-${name}`);
    } else if (this.props.sort === `-${name}`) {
      this.props.changeSort('id');
    } else {
      this.props.changeSort(name);
    }
  }

  render() {
    // Generate headers list
    const headers = this.props.headers.map((header, i) => {
      // Define sort icon
      let icon;
      if (this.props.sort === header.name) {
        icon = (<i className={`ion ion-arrow-up-b ${styles.icon}`}></i>);
      } else if (this.props.sort === `-${header.name}`) {
        icon = (<i className={`ion ion-arrow-down-b ${styles.icon}`}></i>);
      }

      return (
        <th key={i} onClick={() => this.changeSort(header.name)}>
          {header.label} {icon}
        </th>
      );
    });

    return (
      <thead className={styles.tableHeader}>
      <tr className={styles.tableHeader}>
        <th>ID</th>
        {headers}
        <th></th>
      </tr>
      </thead>
    );
  }
}

export default TableHeader;
