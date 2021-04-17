import React from 'react';
import { Dropdown, Table } from 'react-bootstrap';
import './AdminBookingTable.css'

const AdminOrderListTable = ({ bookings }) => {
    return (
        <Table bordered hover className="maneg-product-table mb-4">
            <thead className="border-bottom">
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Service</th>
                    <th>PayWith</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {bookings.map((booking) => (
                    <tr key={booking._id}>
                        <td>{booking.name}</td>
                        <td>{booking.email}</td>
                        <td>{booking.service}</td>
                        <td>Cradit Card</td>
                        <td>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {booking.bookingStatus}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={(e) => console.log(e.target.innerText)}>Painding</Dropdown.Item>
                                    <Dropdown.Item>Done</Dropdown.Item>
                                    <Dropdown.Item>On going</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
};

export default AdminOrderListTable;