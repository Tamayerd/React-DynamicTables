import React, { useEffect, useState } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Modal,
  Fade,
  Checkbox,
  Collapse,
  Typography,
  IconButton,
  FormControl,
  FormControlLabel,
  TextField,
  TableCell,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Container } from "react-bootstrap";

export const Parameter = () => {
  const [data, setData] = useState("");
  const [theModel, setTheModel] = useState({});
  const [newData, setNewData] = useState();
  const [selectedData, setselectedData] = useState();

  //MODALLER
  const [openModal, setOpenModal] = useState(false);
  const [modalClose, setModalClose] = useState(false);
  const [collapseOpen, setCollapseOpen] = useState(false);

  //Vehicle
  const [useVehicle, setUseVehicle] = useState([]);
  const [useSelectedVehicle, setSelectedUseVehicle] = useState([]);
  const [vehicleName, setVehicleName] = useState([]);
  const [enteredVehicleNames, setEnteredVehicleNames] = useState([]);

  //MUX Table
  const [selectedDIN, setSelectedDIN] = useState("null");
  const [selectedOUT, setSelectedOUT] = useState("null");
  const [selectedSlave, setSelectedSlave] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Indicator");
  const [selectedIndicator, setSelectedIndicator] = useState();
  const [proxyName, setProxyName] = useState();

  const [getSelectedDIN, setGetselectedDIN] = useState();
  const [getSelectedOUT, setGetselectedOUT] = useState();
  const [getselectedSlave, setGetselectedSlave] = useState();
  const [getselectedOption, setGetselectedOption] = useState();
  const [getselectedIndicator, setGetselectedIndicator] = useState();
  const [getproxyName, setGetproxyName] = useState();

  let selectedVehicle = enteredVehicleNames[0]
    ? enteredVehicleNames[0]
    : useSelectedVehicle;

  const closeModal = () => {
    setModalClose(true);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleCollapseToggle = () => {
    setCollapseOpen(!collapseOpen);
  };

  const [open, setOpen] = useState(false);
  const [openIndicator, setOpenIndicator] = useState(false);

  const handleVehicleNameChange = (event) => {
    setVehicleName(event.target.value);
  };
  const handleAddVhicle = () => {
    setEnteredVehicleNames((prevNames) => [...prevNames, vehicleName]);
    closeModal(false);
  };
  const handleVehicleName = (event) => {
    setSelectedUseVehicle(event.target.value);
  };
  const handleRemove = () => {
    setEnteredVehicleNames("");
    setVehicleName("");
  };

  //Form Items
  const [muxCount, setMuxCount] = useState(0);
  const [bmsCount, setBmsCount] = useState(0);
  const [generatorCount, setGeneratorCount] = useState(0);
  const [fuelTankCount, setFuelTankCount] = useState(0);
  const [vehicleData, setVehicleData] = useState({});
  const [selectedCamera, setSelectedCamera] = useState("4 Kamera");
  const [selectedScreen, setSelectedScreen] = useState(
    "1 Ekran (Sürücü Ekranı)"
  );
  const [selectedMap, setSelectedMap] = useState(false);
  const [frontCam, setFrontCam] = useState(false);
  const [backCam, setBackCam] = useState(false);

  const handleCameraChange = (event) => {
    setSelectedCamera(event.target.value);
  };
  const handleScreenChange = (event) => {
    setSelectedScreen(event.target.value);
  };

  // Örnek veri MUX
  const dataa = [
    { id: 1, DIN: "DIN01", OUT: "OUT01" },
    { id: 2, DIN: "DIN02", OUT: "OUT02" },
    { id: 3, DIN: "DIN03", OUT: "OUT03" },
    { id: 4, DIN: "DIN04", OUT: "OUT04" },
    { id: 5, DIN: "DIN05", OUT: "OUT05" },
    { id: 6, DIN: "DIN06", OUT: "OUT06" },
    { id: 7, DIN: "DIN07", OUT: "OUT07" },
    { id: 8, DIN: "DIN08", OUT: "OUT08" },
    { id: 9, DIN: "DIN09", OUT: "OUT09" },
    { id: 10, DIN: "DIN10", OUT: "OUT10" },
    { id: 11, DIN: "DIN11", OUT: "OUT11" },
    { id: 12, DIN: "DIN12", OUT: "OUT12" },
    { id: 13, DIN: "DIN13", OUT: "OUT13" },
    { id: 14, DIN: "DIN14", OUT: "OUT14" },
    { id: 15, DIN: "DIN15", OUT: "OUT15" },
    { id: 16, DIN: "DIN16", OUT: "OUT16" },
    { id: 17, DIN: "DIN17", OUT: "OUT17" },
    { id: 18, DIN: "DIN18", OUT: "OUT18" },
    { id: 19, DIN: "DIN19", OUT: "OUT19" },
    { id: 20, DIN: "DIN20", OUT: "OUT20" },
    { id: 21, DIN: "DIN21", OUT: "OUT21" },
    { id: 22, DIN: "DIN22", OUT: "OUT22" },
    { id: 23, DIN: "DIN23", OUT: "OUT23" },
    { id: 24, DIN: "DIN24", OUT: "OUT24" },
    { id: 25, DIN: "DIN25", OUT: "OUT25" },
    { id: 26, DIN: "DIN26", OUT: "OUT26" },
    { id: 27, DIN: "DIN27", OUT: "OUT27" },
    { id: 28, DIN: "DIN28", OUT: "OUT28" },
    { id: 29, DIN: "DIN29", OUT: "OUT29" },
    { id: 30, DIN: "DIN30", OUT: "OUT30" },
    { id: 31, DIN: "DIN31", OUT: "OUT31" },
    { id: 32, DIN: "DIN32", OUT: "OUT32" },
  ];
  const dataSlave = [
    { id: 1, DIN: "DIN01", OUT: "OUT01" },
    { id: 2, DIN: "DIN02", OUT: "OUT02" },
    { id: 3, DIN: "DIN03", OUT: "OUT03" },
    { id: 4, DIN: "DIN04", OUT: "OUT04" },
    { id: 5, DIN: "DIN05", OUT: "OUT05" },
    { id: 6, DIN: "DIN06", OUT: "OUT06" },
    { id: 7, DIN: "DIN07", OUT: "OUT07" },
    { id: 8, DIN: "DIN08", OUT: "OUT08" },
    { id: 9, DIN: "DIN09", OUT: "OUT09" },
    { id: 10, DIN: "DIN10", OUT: "OUT10" },
    { id: 11, DIN: "DIN11", OUT: "OUT11" },
    { id: 12, DIN: "DIN12", OUT: "OUT12" },
    { id: 13, DIN: "DIN13", OUT: "OUT13" },
    { id: 14, DIN: "DIN14", OUT: "OUT14" },
    { id: 15, DIN: "DIN15", OUT: "OUT15" },
    { id: 16, DIN: "DIN16", OUT: "OUT16" },
    { id: 17, DIN: "DIN17", OUT: "OUT17" },
    { id: 18, DIN: "DIN18", OUT: "OUT18" },
    { id: 19, DIN: "DIN19", OUT: "OUT19" },
    { id: 20, DIN: "DIN20", OUT: "OUT20" },
    { id: 21, DIN: "DIN21", OUT: "OUT21" },
    { id: 22, DIN: "DIN22", OUT: "OUT22" },
    { id: 23, DIN: "DIN23", OUT: "OUT23" },
    { id: 24, DIN: "DIN24", OUT: "OUT24" },
    { id: 25, DIN: "DIN25", OUT: "OUT25" },
    { id: 26, DIN: "DIN26", OUT: "OUT26" },
    { id: 27, DIN: "DIN27", OUT: "OUT27" },
    { id: 28, DIN: "DIN28", OUT: "OUT28" },
    { id: 29, DIN: "DIN29", OUT: "OUT29" },
    { id: 30, DIN: "DIN30", OUT: "OUT30" },
    { id: 31, DIN: "DIN31", OUT: "OUT31" },
    { id: 32, DIN: "DIN32", OUT: "OUT32" },
  ];
  const handleRowClick = (value, type) => {
    if (getselectedSlave) {
      if (type === "DIN") {
        setGetselectedDIN(value);
        setGetselectedOUT("");
        setGetselectedOption("Proxy");
        setOpen(true);
      } else if (type === "OUT") {
        setGetselectedOUT(value);
        setGetselectedDIN("");
        setGetselectedOption("Proxy");
        setOpen(true);
      }
    } else {
      setOpen(false);
    }
  };
  const handleSlaveSelection = (slave) => {
    setGetselectedSlave(slave);
  };
  const createNewRow = () => ({
    output: getSelectedDIN || getSelectedOUT,
    type: getselectedOption,
    name: getselectedIndicator || getproxyName,
    unit: getselectedSlave,
  });

  //MUX Table List
  const handleDeleteClick = (deletedRow) => {
    const updatedData = newData.filter((row) => row !== deletedRow);
    localStorage.setItem("newData", JSON.stringify(updatedData));
    setNewData(updatedData);
  };

  const handleClose = () => {
    if (getselectedIndicator || getproxyName) {
      const newRow = createNewRow();

      const storedData = JSON.parse(localStorage.getItem("newData")) || [];

      if (data[selectedVehicle]?.mux_configuration) {
        const Vehicle = data[selectedVehicle];
        let updatedData = [...Vehicle.mux_configuration, ...storedData, newRow];
        const uniqueData = updatedData.filter((value, index, self) => {
          return (
            index ===
            self.findIndex(
              (obj) =>
                obj.output === value.output &&
                obj.unit === value.unit &&
                obj.type === value.type &&
                obj.name === value.name
            )
          );
        });

        localStorage.setItem("newData", JSON.stringify(uniqueData));
        setselectedData(uniqueData);

        setNewData(uniqueData);
        setGetselectedIndicator();
        setOpen(false);
      } else if (getSelectedDIN || getSelectedOUT) {
        const newRow = createNewRow();
        let updatedData = [...storedData, newRow];
        const uniqueData = updatedData.filter((value, index, self) => {
          return (
            index ===
            self.findIndex(
              (obj) =>
                obj.output === value.output &&
                obj.unit === value.unit &&
                obj.type === value.type &&
                obj.name === value.name
            )
          );
        });
        localStorage.setItem("newData", JSON.stringify(uniqueData));
        setselectedData(uniqueData);

        setNewData(uniqueData);
        setGetselectedIndicator();
        setOpen(false);
      }
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseIndicator = () => {
    setOpenIndicator(false);
  };
  const handleOpenIndicator = () => {
    setOpenIndicator(true);
  };
  const handleSelectChange = (event) => {
    setGetselectedOption(event.target.value);
    console.log(getselectedOption);
  };
  const handleSelectIndicator = (event) => {
    setGetselectedIndicator(event.target.value);
  };
  const handleProxyNameChange = (event) => {
    setGetproxyName(event.target.value);
  };
  const handleIndicator = (event) => {
    setGetselectedIndicator(event.target.value);
  };

  //VERİLERİ AL
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/user/dowload/getFile`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network hatası", Error);
        }

        const jsonData = await response.json();
        setData(jsonData);

        const vehicles = Object.keys(jsonData);

        setUseVehicle(vehicles);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  //JSON verisini yazdır
  useEffect(() => {
    if (data[useSelectedVehicle]) {
      setVehicleData(data[useSelectedVehicle]);

      //Bmsf
      if (data[useSelectedVehicle].bms_configuration) {
        const bmsConfig = data[useSelectedVehicle].bms_configuration;
        setBmsCount(parseInt(bmsConfig?.count));
      }
      //Mux
      if (data[useSelectedVehicle]?.mux_configuration) {
        const muxConfig = data[useSelectedVehicle]?.mux_configuration;
        const MuxCount = Object.keys(muxConfig).length - 1; //Master çıkartılır
        setMuxCount(parseInt(MuxCount));
      }

      // Jeneratör
      if (data[useSelectedVehicle]?.generator_configuration) {
        setGeneratorCount(
          data[useSelectedVehicle].generator_configuration.count
        );

        // FuelTank
        setFuelTankCount(
          data[useSelectedVehicle].generator_configuration.fuel_tank_count
        );
      }
      //Camera
      if (data[useSelectedVehicle]?.camera_configuration) {
        setFrontCam(data[useSelectedVehicle].camera_configuration.front_camera);
        setBackCam(data[useSelectedVehicle].camera_configuration.back_camera);
        setSelectedCamera(
          data[useSelectedVehicle].camera_configuration
            .birdeye_view_configuration
        );
      }
      //Map
      if (data[useSelectedVehicle]?.map_configuration) {
        setSelectedMap(data[useSelectedVehicle].map_configuration.has_map);
      }
      //Screen
      if (data[useSelectedVehicle]?.screen_configuration) {
        setSelectedScreen(data[useSelectedVehicle]?.screen_configuration.count);
      }

      //MUX Table

      const selectedSlaveArray = data[useSelectedVehicle]?.mux_configuration;
      selectedSlaveArray.forEach((slave) => {
        //output
        setSelectedDIN(slave.output);
        setSelectedOUT(slave.output);
        //name
        setSelectedIndicator(slave.name);
        setProxyName(slave.name);
        //type
        setSelectedOption(slave.type);

        //unit
        setSelectedSlave(slave.unit);
      });
    } else if (!data && !data[useSelectedVehicle]) {
      setVehicleData(useSelectedVehicle);
      setBmsCount(0);
      setMuxCount(0);
      setGeneratorCount(0);
      setFuelTankCount(0);
      setFrontCam(false);
      setBackCam(false);
      setSelectedMap(false);
      setSelectedDIN("");
      setSelectedOUT("");
      setSelectedIndicator("");
      setProxyName("");
      setSelectedOption("");
      setSelectedSlave("");
    } else {
      setVehicleData("ttza");
    }
  }, [data, useSelectedVehicle]);

  //MODEL
  useEffect(() => {
    let model = {};
    console.log(newData);
    if (data && selectedVehicle && newData) {
      console.log(newData);
      model[selectedVehicle] = {
        mux_configuration: [newData] || [
          {
            output: selectedDIN || selectedOUT,
            unit: selectedSlave,
            type: selectedOption,
            name: selectedIndicator || proxyName,
          },
        ],
        bms_configuration: {
          count: bmsCount || 0,
        },
        generator_configuration: {
          count: generatorCount,
          fuel_tank_count: fuelTankCount,
        },
        camera_configuration: {
          front_camera: frontCam,
          back_camera: backCam,
          birdeye_view_configuration: selectedCamera,
        },
        map_configuration: {
          has_map: selectedMap,
        },
        screen_configuration: {
          count: selectedScreen,
        },
      };

      setTheModel(model);
    } else {
      console.log("data gelmedi");
    }
  }, [
    data,
    selectedVehicle,
    selectedSlave,
    selectedIndicator,
    proxyName,
    selectedDIN,
    selectedOUT,
    selectedCamera,
    selectedScreen,
    selectedMap,
    frontCam,
    backCam,
    newData,
    getSelectedDIN,
    getSelectedOUT,
    getselectedOption,
    getselectedIndicator,
    getproxyName,
  ]);

  //MODEL CONTROL
  useEffect(() => {
    let model = {};

    if (data && selectedVehicle) {
      const Vehicle = data[selectedVehicle];
      console.log(newData);
      if (Vehicle && selectedData && newData) {
        console.log(newData);
        model[selectedVehicle] = {
          mux_configuration: [...newData],

          bms_configuration: {
            count: bmsCount || 0,
          },
          generator_configuration: {
            count: generatorCount,
            fuel_tank_count: fuelTankCount,
          },
          camera_configuration: {
            front_camera: frontCam,
            back_camera: backCam,
            birdeye_view_configuration: selectedCamera,
          },
          map_configuration: {
            has_map: selectedMap,
          },
          screen_configuration: {
            count: selectedScreen,
          },
        };

        setTheModel(model);
      }
    } else {
      console.log("data gelmedi");
    }
  }, [
    data,
    selectedData,
    selectedVehicle,
    newData,
    getselectedSlave,
    getselectedIndicator,
    getselectedOption,
    getproxyName,
    getSelectedDIN,
    getSelectedOUT,
    selectedCamera,
    selectedScreen,
    selectedMap,
    frontCam,
    backCam,
  ]);

  const recursiveReplace = (data1, key, value) => {
    delete data1["default"];
    if (key in data1) {
      delete data1[key];
    }
    data1[key] = value[key];
    return data1;
  };

  //Verileri Gönder
  const saveParameters = async () => {
    try {
      const keyToReplace = selectedVehicle;
      const newFile = { ...data };

      let data2send = recursiveReplace(newFile, keyToReplace, theModel);
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/user/dowload/file`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data2send),
        }
      );

      if (response.ok) {
        console.log("Veri başarıyla gönderildi!");

        window.location.reload();
        localStorage.clear();
      } else {
        console.error("Bir hata oluştu.");
      }
    } catch (error) {
      console.error("İstek gönderilirken bir hata oluştu:", error);
    }
  };

  /////FORM////

  const updateConfigurationCount = (
    type,
    count,
    setCount,
    vehicleData,
    setVehicleData
  ) => {
    if ((vehicleData && vehicleData[type]) || vehicleData) {
      if (count < 8 && count >= 0) {
        const updatedConfiguration = {
          ...(vehicleData[type] || {}),
          count: count + 1,
        };

        setVehicleData({
          ...vehicleData,
          [type]: updatedConfiguration,
        });

        setCount(count + 1);
      }
    }
  };

  const decrementCount = (
    type,
    count,
    setCount,
    vehicleData,
    setVehicleData
  ) => {
    if ((vehicleData && vehicleData[type]) || vehicleData) {
      if (count > 0) {
        const updatedConfiguration = {
          ...(vehicleData[type] || {}),
          count: count - 1,
        };

        setVehicleData({
          ...vehicleData,
          [type]: updatedConfiguration,
        });

        setCount(count - 1);
      }
    }
  };

  const incrementMux = () =>
    updateConfigurationCount(
      "mux_configuration",
      muxCount,
      setMuxCount,
      vehicleData,
      setVehicleData
    );
  const decrementMux = () =>
    decrementCount(
      "mux_configuration",
      muxCount,
      setMuxCount,
      vehicleData,
      setVehicleData
    );

  const incrementBms = () =>
    updateConfigurationCount(
      "bms_configuration",
      bmsCount,
      setBmsCount,
      vehicleData,
      setVehicleData
    );
  const decrementBms = () =>
    decrementCount(
      "bms_configuration",
      bmsCount,
      setBmsCount,
      vehicleData,
      setVehicleData
    );

  const incrementGenerator = () =>
    updateConfigurationCount(
      "generator_configuration",
      generatorCount,
      setGeneratorCount,
      vehicleData,
      setVehicleData
    );
  const decrementGenerator = () =>
    decrementCount(
      "generator_configuration",
      generatorCount,
      setGeneratorCount,
      vehicleData,
      setVehicleData
    );

  const incrementFuelTank = () =>
    updateConfigurationCount(
      "generator_configuration",
      fuelTankCount,
      setFuelTankCount,
      vehicleData,
      setVehicleData
    );
  const decrementFuelTank = () =>
    decrementCount(
      "generator_configuration",
      fuelTankCount,
      setFuelTankCount,
      vehicleData,
      setVehicleData
    );
  const sepselectedDIN = selectedDIN || getSelectedDIN;
  const sepselectedOUT = selectedOUT || getSelectedOUT;
  return (
    <>
      <Container>
        {/* ARAÇ SEÇİMİ */}
        <Container>
          <div>
            <InputLabel id="label" label="Master" style={{ color: "white" }}>
              Araç Seçimi
            </InputLabel>
          </div>
          <div style={{ display: "flex" }}>
            <Select
              labelId="label"
              id="select"
              sx={{ width: "200px", bgcolor: "GrayText", color: "white" }}
              value={useSelectedVehicle}
              onChange={handleVehicleName}
            >
              {useVehicle.map((vehicleName) => (
                <MenuItem
                  key={vehicleName}
                  sx={{ color: "black" }}
                  value={vehicleName}
                >
                  {vehicleName}
                </MenuItem>
              ))}
            </Select>

            <Button sx={{ fontSize: "2rem" }} onClick={handleOpenModal}>
              <CiCirclePlus />
            </Button>
            {vehicleName && (
              <>
                <div
                  style={{
                    display: "flex",
                    backgroundColor: "#910512",
                    borderRadius: "8px",
                    alignItems: "center",
                  }}
                >
                  <p
                    style={{
                      color: "white",
                      margin: 0,
                      fontWeight: "bold",
                      flex: 1,
                      padding: 10,
                    }}
                  >
                    Yeni Eklenen Araç: {vehicleName}
                  </p>
                </div>
                <Button sx={{ fontSize: "2rem" }} onClick={handleRemove}>
                  <CiCircleMinus />
                </Button>
              </>
            )}
          </div>
        </Container>
        {/* NEW VEHİCLE NAME MODAL */}
        <Modal open={openModal} onClose={handleCloseModal} sx={{backdropFilter:false}}>
          <Fade in={openModal}>
            <div>
              {!modalClose && (
                <Container
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "500px",
                    marginTop: "8%",
                    backgroundColor: "rgb(47,79,79)",

                    opacity: "90%",
                    borderRadius: "10px",
                    color: "white",
                  }}
                >
                  <IconButton
                    style={{ alignSelf: "flex-end", marginTop: "10px" }}
                    onClick={closeModal}
                  >
                    <CloseIcon />
                  </IconButton>

                  {/* Eski araç bilgilerini al  */}
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Eski Aracın Bilgilerini almak ister misiniz?"
                    onChange={handleCollapseToggle}
                   
                  />

                  <Typography
                    variant="h6"
                    style={{ color: "white", margin: "5px" }}
                  >
                    Yeni Araç Ekle
                  </Typography>
                  <TextField
                    label="Araç İsmi"
                    variant="outlined"
                    value={vehicleName}
                    onChange={handleVehicleNameChange}
                    style={{ margin: "10px", color: "white" }}
                  />

                  {/*Araç seçme  */}
                  <Collapse in={collapseOpen}>
                    <Typography
                      variant="h6"
                      style={{ color: "white", margin: "5px" }}
                    >
                      Var Olan Araçtan Kopyala
                    </Typography>
                    <TextField
                      label="Araç İsmi"
                      variant="outlined"
                      value={vehicleName}
                      onChange={handleVehicleNameChange}
                      style={{ margin: "10px", color: "white" }}
                    />
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="demo-simple-select-helper-label">
                        Eski Araç
                      </InputLabel>
                      <Select
                        labelId="label"
                        id="select"
                        sx={{
                          width: "200px",
                          color: "white",
                        }}
                        value={useSelectedVehicle}
                        onChange={handleVehicleName}
                      >
                        {useVehicle.map((vehicleName) => (
                          <MenuItem
                            key={vehicleName}
                            sx={{ color: "black" }}
                            value={vehicleName}
                          >
                            {vehicleName}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Collapse>
                  <Button
                    style={{
                      margin: "10px",
                      color: "white",
                      backgroundColor: "black",
                    
                    }}
                    onClick={handleAddVhicle}
                  >
                    Ekle
                  </Button>
                </Container>
              )}
            </div>
          </Fade>
        </Modal>
        {/* MUX BMS JENERATÖR YAKIT TANKI EKRAN KAMERA HARİTA ... */}
        <Container>
          <div className="flex row ">
            <div className="row mt-3">
              <div className="col-md-6 mt-3">
                <div
                  className="col-md-9"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>MUX Slave Sayısı</Typography>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton aria-label="decrease" onClick={decrementMux}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="h4">{muxCount}</Typography>
                    <IconButton aria-label="increase" onClick={incrementMux}>
                      <AddIcon />
                    </IconButton>
                  </div>
                </div>

                <div
                  className="col-md-9"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>BMS Sayısı</Typography>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton aria-label="decrease" onClick={decrementBms}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="h4">{bmsCount}</Typography>
                    <IconButton aria-label="increase" onClick={incrementBms}>
                      <AddIcon />
                    </IconButton>
                  </div>
                </div>

                <div
                  className="col-md-9"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>Jeneratör Sayısı</Typography>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton
                      aria-label="decrease"
                      onClick={decrementGenerator}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="h4">{generatorCount}</Typography>
                    <IconButton
                      aria-label="increase"
                      onClick={incrementGenerator}
                    >
                      <AddIcon />
                    </IconButton>
                  </div>
                </div>

                <div
                  className="col-md-9 "
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography>Yakıt Tank Sayısı</Typography>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <IconButton
                      aria-label="decrease"
                      onClick={decrementFuelTank}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="h4">{fuelTankCount}</Typography>
                    <IconButton
                      aria-label="increase"
                      onClick={incrementFuelTank}
                    >
                      <AddIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>

            {/* CAMERA SCREEN */}
            <div></div>
            <div style={{ width: "400px", }} className="col-md-6">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "10px",


                }}
              >
                <InputLabel style={{ color: "white" }}>
                  360 Kamera Sayısı:
                </InputLabel>
                <Select
                  sx={{ bgcolor: "#BDBDBD", width: "150px", color: "black" }}
                  value={selectedCamera}
                  onChange={handleCameraChange}
                >
                  <MenuItem value="4 Kamera" sx={{ color: "black" }}>
                    4 Kamera
                  </MenuItem>
                  <MenuItem value="6 Kamera" sx={{ color: "black" }}>
                    6 Kamera
                  </MenuItem>
                </Select>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  marginBottom: "10px",
                }}
              >
                <InputLabel style={{ color: "white" }}>
                  Ekran Sayısı:
                </InputLabel>
                <Select
                  sx={{ bgcolor: "#BDBDBD", width: "150px", color: "black" }}
                  value={selectedScreen}
                  onChange={handleScreenChange}
                >
                  <MenuItem
                    value="1 Ekran (Sürücü Ekranı)"
                    sx={{ color: "black" }}
                  >
                    1 Ekran (Sürücü Ekranı)
                  </MenuItem>
                  <MenuItem value=" 2 Ekran" sx={{ color: "black" }}>
                    2 Ekran
                  </MenuItem>
                </Select>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectedMap}
                    onChange={(event) => setSelectedMap(event.target.checked)}
                  />
                }
                label="Harita"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={frontCam}
                    onChange={(event) => setFrontCam(event.target.checked)}
                  />
                }
                label="Ön Kamera"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={backCam}
                    onChange={(event) => setBackCam(event.target.checked)}
                  />
                }
                label="Arka Kamera"
              />
            </div>
          </div>
        </Container>
        {/* MUX TABLE LIST */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Çıktı</TableCell>
                <TableCell>Tip</TableCell>
                <TableCell>İsim</TableCell>
                <TableCell>Ünite</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {newData?.map((newRow, index) => (
                <TableRow key={`new-${index}`}>
                  <TableCell>{newRow.output}</TableCell>
                  <TableCell>{newRow.type}</TableCell>
                  <TableCell>{newRow.name}</TableCell>
                  <TableCell>{newRow.unit}</TableCell>
                  <TableCell>
                    <Container>
                      <IconButton sx={{ bgcolor: "red" }}>
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        sx={{ bgcolor: "red" }}
                        onClick={() => handleDeleteClick(newRow)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Container>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {/* MUX TABLE ITEMS*/}
        <Container style={{ display: "flex", flexDirection: "column" }}>
          <TableCell style={{ border: "none" }}>
            <InputLabel id="label" label="Master" style={{ color: "white" }}>
              MUX Seçimi
            </InputLabel>
            <Select
              labelId="label"
              id="select"
              sx={{ width: "200px", bgcolor: "GrayText", color: "white" }}
              onChange={(e) => handleSlaveSelection(e.target.value)}
              value={getselectedSlave || selectedSlave}
            >
              <MenuItem value="MASTER" sx={{ color: "black" }}>
                MASTER
              </MenuItem>
              <MenuItem value="SLAVE1" sx={{ color: "black" }}>
                SLAVE1
              </MenuItem>
              <MenuItem value="SLAVE2" sx={{ color: "black" }}>
                SLAVE2
              </MenuItem>
              <MenuItem value="SLAVE3" sx={{ color: "black" }}>
                SLAVE3
              </MenuItem>
              <MenuItem value="SLAVE4" sx={{ color: "black" }}>
                SLAVE4
              </MenuItem>
              <MenuItem value="SLAVE5" sx={{ color: "black" }}>
                SLAVE5
              </MenuItem>
              <MenuItem value="SLAVE6" sx={{ color: "black" }}>
                SLAVE6
              </MenuItem>
              <MenuItem value="SLAVE7" sx={{ color: "black" }}>
                SLAVE7
              </MenuItem>
              <MenuItem value="SLAVE8" sx={{ color: "black" }}>
                SLAVE8
              </MenuItem>
            </Select>
          </TableCell>

          {selectedVehicle && (
            <div style={{ display: "flex", marginLeft: "80px" }}>
              {[0, 1, 2].map((groupIndex) => (
                <TableContainer
                  key={groupIndex}
                  component={Paper}
                  sx={{ width: "200px", marginLeft: "10px" }}
                >
                  <Table>
                    <TableBody>
                      {dataSlave
                        .slice(groupIndex * 11, (groupIndex + 1) * 11)
                        .map((row) => (
                          <TableRow key={row.id}>
                            <TableCell
                              onClick={() => handleRowClick(row.DIN, "DIN")}
                            >
                              {row.DIN}
                            </TableCell>
                            <TableCell
                              onClick={() => handleRowClick(row.OUT, "OUT")}
                            >
                              {row.OUT}
                            </TableCell>
                          </TableRow>
                        ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              ))}
            </div>
          )}

          {/* Modal  */}

          <Modal open={open} onClose={handleClose} closeAfterTransition>
            <Fade in={open}>
              <div>
                {dataa
                  .filter(
                    (row) =>
                      row.DIN === sepselectedDIN || row.OUT === sepselectedOUT
                  )
                  .map((filteredRow) => (
                    <div key={filteredRow.id}>
                      {(getSelectedOUT || selectedOUT) && (
                        <p style={{ marginLeft: "50%" }}>
                          {getSelectedOUT || selectedOUT}
                        </p>
                      )}
                      {(getSelectedDIN || selectedDIN) && (
                        <p style={{ marginLeft: "50%" }}>
                          {getSelectedDIN || selectedDIN}
                        </p>
                      )}

                      {/* FORM MODAL */}
                      <div style={{ marginLeft: "35%" }}>
                        <FormControl
                          sx={{ m: 1, minWidth: 200, color: "white" }}
                        >
                          <Select
                            labelId="demo-controlled-open-select-label"
                            id="demo-controlled-open-select"
                            onOpen={handleOpen}
                            sx={{ color: "black", bgcolor: "white" }}
                            value={getselectedOption || selectedOption}
                            onChange={handleSelectChange}
                          >
                            <MenuItem
                              style={{ color: "black" }}
                              value="Indicator"
                            >
                              Indicator
                            </MenuItem>
                            <MenuItem style={{ color: "black" }} value="Proxy">
                              Proxy
                            </MenuItem>
                          </Select>
                          {(getselectedOption || selectedOption) ===
                            "Proxy" && (
                            <>
                              <TextField
                                id="proxy-name"
                                value={getproxyName}
                                onChange={handleProxyNameChange}
                                style={{ marginTop: "10px" }}
                                sx={{ bgcolor: "white" }}
                              />
                              <Button
                                variant="contained"
                                size="large"
                                sx={{ mt: 4 }}
                                onClick={handleClose}
                              >
                                Ekle
                              </Button>
                            </>
                          )}
                          {getselectedOption === "Indicator" && (
                            <>
                              <Select
                                labelId="demo-controlled-open-select-label"
                                id="demo-controlled-open-select"
                                open={openIndicator}
                                onClose={handleCloseIndicator}
                                onOpen={handleOpenIndicator}
                                onChange={handleSelectIndicator}
                                sx={{ color: "black", bgcolor: "white" }}
                                style={{ marginTop: "10px" }}
                              >
                                <MenuItem
                                  style={{ color: "black" }}
                                  value="Kısa Far"
                                  onChange={handleIndicator}
                                >
                                  Kısa Far
                                </MenuItem>
                                <MenuItem
                                  style={{ color: "black" }}
                                  value="Uzun Far"
                                  onChange={handleIndicator}
                                >
                                  Uzun Far
                                </MenuItem>
                                <MenuItem
                                  style={{ color: "black" }}
                                  value="Infrared"
                                  onChange={handleIndicator}
                                >
                                  Infrared
                                </MenuItem>
                                <MenuItem
                                  style={{ color: "black" }}
                                  value="Park Lambası"
                                  onChange={handleIndicator}
                                >
                                  Park Lambası
                                </MenuItem>
                                <MenuItem
                                  style={{ color: "black" }}
                                  value="Karartma"
                                  onChange={handleIndicator}
                                >
                                  Karartma
                                </MenuItem>
                                <MenuItem
                                  style={{ color: "black" }}
                                  value="İç Aydınlatma"
                                  onChange={handleIndicator}
                                >
                                  İç Aydınlatma
                                </MenuItem>
                                <MenuItem
                                  style={{ color: "black" }}
                                  value="Sağ Sinyal"
                                  onChange={handleIndicator}
                                >
                                  Sağ Sinyal
                                </MenuItem>
                                <MenuItem
                                  style={{ color: "black" }}
                                  value="Sol Sinyal"
                                  onChange={handleIndicator}
                                >
                                  Sol Sinyal
                                </MenuItem>
                              </Select>
                              <Button
                                variant="contained"
                                size="large"
                                sx={{ mt: 4 }}
                                onClick={handleClose}
                              >
                                Ekle
                              </Button>
                            </>
                          )}
                        </FormControl>
                      </div>
                    </div>
                  ))}
              </div>
            </Fade>
          </Modal>
        </Container>
        {/* VERİLERİ GÖNDER */}
        <Container className="col-md-0 mt-3">
          <Button
            className="position-absolute "
            style={{
              backgroundColor: "white",
              backgroundColor: "#FFF000",
              color: "black",
            }}
            onClick={saveParameters}
          >
            Verileri Kaydet
          </Button>
        </Container>
      </Container>
    </>
  );
};
