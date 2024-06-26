import { Box, Typography, useTheme, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockDataInvoices } from "../../data/mockData";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const PaymentReservations = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [paymentDetails, setPaymentDetails] = useState([]);

  // Function to fetch contacts data from the API
  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:8095/payment/paymentDetails');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      console.log(data);
      setPaymentDetails(data);
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  };

  // Fetch contacts data when the component mounts
  useEffect(() => {
    fetchContacts();
  }, []);


  const columns = [
    { field: "paymentId", headerName: "Payment ID" },
    {
      field: "customerName",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "paymentDate",
      headerName: "payment Date",
      flex: 1,
      
    },
    {
      field: "paymentTime",
      headerName: "payment Time",
      flex: 1,
    },
    {
      field: "serviceType",
      headerName: "Service Type",
      flex: 1,
    },
    {
      field: "shopName",
      headerName: "Shop Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "totalPayment",
      headerName: "Total Amount",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Status",
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpenChildWindow(params.row)}
        >
        {params.row.paymentStatus === 'approved' ? params.row.processStatus : params.row.processStatus}
        </Button>
      ),
      flex: 1,
    },
   
  ];

  const handleOpenChildWindow = (rowData) => {
    navigate(`/child-window/${rowData.reservationId}`);
  };

  return (
    <Box m="20px">
      <Header title="PAYMENTS" subtitle="List of Payments" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
         <DataGrid 
        //  checkboxSelection 
        rows={paymentDetails} 
        getRowId={(row) => row.paymentId}
        columns={columns} />
      </Box>
    </Box>
  );
};

export default PaymentReservations;