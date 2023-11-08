import { DataGrid } from 'devextreme-react'
import { Column, Search } from 'devextreme-react/data-grid'
import React from 'react'

interface datagridProps {
    columns: any[];

}

export const DatagridTemplate = ({ columns }: datagridProps) => {
    return (
        <div className='w-full h-full px-2'>
            <DataGrid
                height={300}
                allowColumnResizing={true}
                columnResizingMode={"widget"}
                dataSource={[]}
                rowAlternationEnabled={true}
                onRowClick={() => { }}
                onRowDblClick={() => { }}
                showBorders={true}
                showRowLines={true}

            >
                <Search enabled={true} />
                {columns.map(({ id, caption, dataField, dataType }: any) => {
                    return (
                        <Column
                            key={id}
                            alignment={'left'}
                            allowSearch={true}
                            format={''}
                            caption={caption}
                            dataField={dataField}
                            dataType={dataType}
                        >

                        </Column>
                    )
                })}

            </DataGrid>
        </div>
    )
}
