import { Drawer, Timeline } from 'antd'
import React from 'react'
import { CardsTemplate } from '../../templates/cardsTemplate';

interface props {
    handleClose: (e: any) => void;
    handleOpen: boolean
    extraOptions?: any;
}

export const SideDrawer = ({ handleClose, handleOpen, extraOptions }: props) => {
    return (
        <div className='w-full h-full '>
            <Drawer
                title="Developers Storyboard and Story-points"
                placement={"right"}
                width={500}
                onClose={handleClose}
                open={handleOpen}
                extra={
                    extraOptions
                }
            >
                <section className='w-full h-full '>
                    {/* Target module */}
                    <div className='h-1/6'>
                        <CardsTemplate
                            isbordered={true}
                            isTitle={true}
                            title='Target Module'
                            className=''
                            content={
                                <div>
                                    <p>Transport Management System</p>
                                </div>
                            }
                        />
                    </div>

                    {/* TimeLine */}

                    <div className='h-[42%]'>
                        <p className='font-semibold text-lg p-3'>Story Points</p>
                        <Timeline
                            mode={'left'}
                            items={[
                                {
                                    label: '2015-09-01',
                                    children: 'Create a services',
                                    color : 'green',
                                },
                                {
                                    label: '2015-09-01 09:12:11',
                                    children: 'Solve initial network problems',
                                    color : 'green',
                                },
                                {
                                    children: 'Technical testing',
                                    color : 'red',
                                },
                                {
                                    label: '2015-09-01 09:12:11',
                                    children: 'Network problems being solved',
                                    color : 'red',
                                },
                            ]}
                        />

                    </div>
                    <div className='h-[38%]'>
                        <CardsTemplate
                            isbordered={true}
                            isTitle={true}
                            title='Developer Todo-List'
                            className=''
                            content={undefined}
                        />

                    </div>
                </section>
            </Drawer>

        </div>
    )
}
