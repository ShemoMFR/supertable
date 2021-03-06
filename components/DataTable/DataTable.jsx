/* LIBRAIRIES */
import React, { useMemo, useContext } from 'react';
import SideInfosContext from '../../context/SideInfosContext';

/* UI */ 
import { Table, Thead, Tbody, Tr, Th, Td, chakra } from '@chakra-ui/react'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { useTable, useSortBy } from 'react-table'

/* CSS */ 
import style from './DataTable.module.css';

export default function DataTable({ datas }) {

    const {setIsSideOpen, isSideOpen, rateApplicant, setIndexRow, setApplicant} = useContext(SideInfosContext);

    function handleClickRow(index, row) {
        setIndexRow(index);
        setIsSideOpen(!isSideOpen);
        setApplicant(row.original)
    }

    const data = useMemo(
        () => datas,
        [],
    )
  
    const columns = useMemo(
      () => [
        {
            Header: 'First',
            accessor: 'firstname',
        },
        {
            Header: 'Last',
            accessor: 'lastname',
        },
        {
            Header: 'Job',
            accessor: 'job_title',
        },
        {
            Header: 'Salary',
            accessor: 'monthly_salary',
            isNumeric: true,
        },
        {
            Header: 'Garantor',
            accessor: 'has_guarantor',
        },
        {
            Header: "Date",
            accessor: 'preferred_move_in_date',
        }
      ],
      [],
    )
  
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy)

    return (
      <Table {...getTableProps()} variant='striped' size='md' className={style.headerT} >
        <Thead >

          {headerGroups.map((headerGroup) => (
                <Tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <Th {...column.getHeaderProps(column.getSortByToggleProps())}
                        isNumeric={column.isNumeric}  /* style={{fontSize: "0.6rem"}} */
                        >
                        {column.render('Header')}
                        <chakra.span pl='4' >
                            {column.isSorted ? (
                            column.isSortedDesc ? (
                                <TriangleDownIcon aria-label='sorted descending' />
                            ) : (
                                <TriangleUpIcon aria-label='sorted ascending' />
                            )
                            ) : null}
                        </chakra.span>
                        </Th>
                    ))}
                </Tr>
          ))}

        </Thead>
        <Tbody {...getTableBodyProps()}>

            {rows.map((row, index) => {
                prepareRow(row)
                return (
                    <Tr  {...row.getRowProps()} className={style.row}  onClick={() => handleClickRow(index, row)}>
                    {row.cells.map((cell) => (
                        <Td  {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                        {cell.render('Cell')}
                    </Td>
                    ))}
                </Tr>
                )
            })}

        </Tbody>
      </Table>
    )
  }