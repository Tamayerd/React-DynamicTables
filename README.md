#  React-DynamicTables

This project is a dynamic table application created using React. When data is manually entered by the user, it is stored in a JSON file, and a JSON file is generated on the Node.js side. The project provides a user interface (UI) using tools such as MUI Tools and Bootstrap.

- JSON Model
```topojson
  selected = {
        configuration: [
          {
            output: selected,
            unit: selectedSlave,
            type: selectedOption,
            name: selectedIndicator,
          },
        ],
        bmsconfiguration: {
          count: Count,
        },
        generatconfiguration: {
          count: generatorCount,
          fuel_tank_count: fuelTankCount,
        },
        camconfiguration: {
          front_camera: frontCam,
          back_camera: backCam,
          birdeye_view_configuration: selectedCamera,
        },
        mapconfiguration: {
          has_map: selectedMap,
        },
        screenconfiguration: {
          count: selectedScreen,
        },
      };
```
## Usage

To work on the project, follow the steps below:

1. Clone the project:

        git clone https://github.com/user/React-DynamicTables.git
 

2. Navigate to the project directory:

        cd React-DynamicTables
   

3. Install the required dependencies:

       npm install


4. Start the application:

   
        npm start
    

5. View the application by going to [http://localhost:3000](http://localhost:3000) in your browser.

## Tools Used

- MUI Tools
- Bootstrap

## License

Feel free to replace "React-DynamicTables" ,"http://localhost:3000," and other placeholders with the actual details of your project.

