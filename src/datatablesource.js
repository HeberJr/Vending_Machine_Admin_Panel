export const machineColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "machine",
        headerName: "Machines",
        width: 230,
        renderCell: (params) => {
            return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.machineName}
            </div>
            );
        },
    },
    {
    field: "email",
    headerName: "Email",
    width: 230,
    },

    {
    field: "latitude",
    headerName: "Latitude",
    width: 100,
    },

    {
    field: "longitude",
    headerName: "Longitude",
    width: 100,
    },

    {
    field: "local",
    headerName: "Localization",
    width: 150,
    },

    {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
        return (
        <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
        </div>
        );
    },
    },
]

export const machineRows = [
    {
      id: 1,
      machineName: "Snow",
      img: "https://super.abril.com.br/wp-content/uploads/2018/08/site_2.jpg",
      status: "active",
      email: "1snow@gmail.com",
      latitude: 35,
      longitude: 10,
      local: "Shopping 1",
    },
    {
      id: 2,
      machineName: "Jamie Lannister",
      img: "https://super.abril.com.br/wp-content/uploads/2018/08/site_2.jpg",
      email: "2snow@gmail.com",
      status: "disabled",
      latitude: 42,
      longitude: 10,
      local: "Shopping 2",
    },
    {
      id: 3,
      machineName: "Lannister",
      img: "https://super.abril.com.br/wp-content/uploads/2018/08/site_2.jpg",
      email: "3snow@gmail.com",
      status: "pending",
      latitude: 45,
      longitude: 1,
      local: "Shopping 3",
    },
    {
      id: 4,
      machineName: "Stark",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "4snow@gmail.com",
      status: "active",
      latitude: 16,
      longitude: 10,
      local: "Shopping 4",
    },
    {
      id: 5,
      machineName: "Targaryen",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "5snow@gmail.com",
      status: "disabled",
      latitude: 22,
      longitude: 10,
      local: "Shopping 5",
    },
    {
      id: 6,
      machineName: "Melisandre",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "6snow@gmail.com",
      status: "active",
      latitude: 15,
      longitude: 10,
      local: "market 1",
    },
    {
      id: 7,
      machineName: "Clifford",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "7snow@gmail.com",
      status: "disabled",
      latitude: 44,
      longitude: 10,
      local: "market 2",
    },
    {
      id: 8,
      machineName: "Frances",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "8snow@gmail.com",
      status: "active",
      latitude: 36,
      longitude: 10,
      local: "market 3",
    },
    {
      id: 9,
      machineName: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "pending",
      latitude: 65,
      longitude: 10,
      local: "market 4",
    },
    {
      id: 10,
      machineName: "Roxie",
      img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      email: "snow@gmail.com",
      status: "active",
      latitude: 65,
      longitude: 10,
      local: "market 5",
    },
  ];

  export const productColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "nameProduct",
        headerName: "Name Product",
        width: 230,
        renderCell: (params) => {
            return (
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.nameProduct}
            </div>
            );
        },
    },
    {
    field: "description",
    headerName: "Description",
    width: 230,
    },

    {
    field: "category",
    headerName: "Category",
    width: 100,
    },

    {
    field: "price",
    headerName: "Price",
    width: 150,
    },

    {
    field: "status",
    headerName: "Status",
    width: 100,
    renderCell: (params) => {
        return (
        <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
        </div>
        );
    },
    },
]

export const productRows = [
    {
      id: 1,
      nameProduct: "Coke",
      img: "https://www.teclasap.com.br/wp-content/uploads/2011/10/coke-2.jpg",
      status: "in stock",
      description: "1snow@gmail.com",
      category: "Drinks",
      price: "$ 2",
    },
    {
      id: 2,
      nameProduct: "Chocolate",
      img: "https://www.clubeextra.com.br/img/uploads/1/905/19804905.jpg",
      description: "2snow@gmail.com",
      status: "in stock",
      category: "Drinks",
      price: "$ 5",
    },
    {
      id: 3,
      nameProduct: "Flip flops",
      img: "https://cdn.shopify.com/s/files/1/1821/4215/products/Surf_Navy.jpg?v=1646682339",
      description: "3snow@gmail.com",
      status: "in stock",
      category: "All",
      price: "$ 10",
    },
    
  ];
