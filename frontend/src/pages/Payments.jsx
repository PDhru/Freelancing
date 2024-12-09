import React, { useEffect, useState } from 'react';
import API from '../utils/api';
import { toast } from 'react-toastify';

const Payments = () => {
    const [payments, setPayments] = useState([]);
    const [formData, setFormData] = useState({ amount: '', status: 'unpaid' });
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Fetch all payments
    const fetchPayments = async (page = 1) => {
        try {
            const { data } = await API.get(`/payments?page=${page}&limit=10`); // Set limit to 10
            setPayments(data.payments); // Update payments state
            setPage(data.page); // Update current page
            setTotalPages(data.pages); // Update total pages
        } catch (error) {
            toast.error('Failed to fetch payments.');
        }
    };

    useEffect(() => {
        fetchPayments(page);
    }, [page]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await API.post('/payments', formData);
            setPayments([...payments, data.payment]);
            setFormData({ amount: '', status: 'unpaid' });
            toast.success('Payment added successfully!');
        } catch (error) {
            toast.error('Failed to add payment.');
        }
    };
    // Mark payment as paid
    const handleMarkAsPaid = async (id) => {
        try {
            const { data } = await API.put(`/payments/${id}/paid`);
            setPayments(payments.map((payment) => (payment._id === id ? data : payment)));
            toast.success('Payment marked as paid!');
        } catch (error) {
            toast.error('Failed to mark payment as paid.');
        }
    };

    // Simulate a payment
    const handleSimulatePayment = async (id) => {
        try {
            const { data } = await API.put(`/payments/${id}/simulate`);
            setPayments(payments.map((payment) => (payment._id === id ? data.payment : payment)));
            toast.success('Payment simulation complete!');
        } catch (error) {
            toast.error('Failed to simulate payment.');
        }
    };


    // Export payments to CSV
    const handleExportCSV = async () => {
        try {
            const response = await API.get('/payments/export/csv', {
                responseType: 'blob',
            });

            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'payments.csv');
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            toast.error('Failed to export payments.');
        }
    };

    // Import payments from CSV
    const handleImportCSV = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('file', file);

        try {
            await API.post('/payments/import/csv', formData);
            toast.success('Payments imported successfully!');
            fetchPayments(page); // Refresh the current page
        } catch (error) {
            toast.error('Failed to import payments.');
        }
    };


    return (
        <div className="container">
            <h2 className="my-4">Payments</h2>

            {/* Add Payment Form */}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input
                        type="number"
                        id="amount"
                        className="form-control"
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select
                        id="status"
                        className="form-control"
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    >
                        <option value="unpaid">Unpaid</option>
                        <option value="paid">Paid</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Add Payment</button>
            </form>

            {/* Payment List */}
            <div className="mt-5">
                <div className="d-flex mb-3 justify-content-between align-items-center">
                    <h3>Payment List</h3>
                    <div className="d-flex   align-items-center">
                        <button onClick={handleExportCSV} className="btn btn-success me-3">Export Payments</button>
                        <div className="d-flex align-items-center">
                            <label htmlFor="csvUpload" className="form-label m-0  fw-bold">Import CSV</label>
                            <input type="file" accept=".csv" onChange={handleImportCSV} className="form-control-file ms-2" />
                        </div>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payments.map((payment) => (
                            <tr key={payment._id}>
                                <td>${payment.amount}</td>
                                <td>{payment.status}</td>
                                <td>
                                    {payment.status === 'unpaid' && (
                                        <>
                                            <button
                                                className="btn btn-success btn-sm me-2"
                                                onClick={() => handleMarkAsPaid(payment._id)}
                                            >
                                                Mark as Paid
                                            </button>
                                            <button
                                                className="btn btn-warning btn-sm"
                                                onClick={() => handleSimulatePayment(payment._id)}
                                            >
                                                Simulate Payment
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* Pagination */}
                <div className="d-flex justify-content-between mt-3">
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => setPage((prev) => Math.max(prev - 1, 1))} // Decrease page
                        disabled={page === 1} // Disable on the first page
                    >
                        Previous
                    </button>
                    <span>Page {page} of {totalPages}</span>
                    <button
                        className="btn btn-outline-primary"
                        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))} // Increase page
                        disabled={page === totalPages} // Disable on the last page
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Payments;
