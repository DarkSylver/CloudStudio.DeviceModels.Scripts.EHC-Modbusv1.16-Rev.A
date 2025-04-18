function parseUplink(device, payload) {
    let mappingCNE = {
        'latitude': 'LATITUDE', // "latitude"
        'lin1.value': 'VALVE_STATUS', // Valve Status
        'lin2.value': 'CLOSED_VALVE_TIME_COUNTER', // Closed Valve Time Counter
        'lin3.value': 'OPEN_VALVE_TIME_COUNTER', // Open Valve Time Counter
        'lin4.value': 'OPMODE', // Operational Mode
        'lin5.value': 'SHUT_IN_OPENING_MODE', // Shut-in Cycle - Opening Mode
        'lin6.value': 'SHUT_IN_CLOSING_MODE', // Shut-in Cycle - Closing Mode
        'lin7.value': 'SHUT_IN_REP_INTERVAL', // Shut-in Cycle - Repetition Interval
        'lin11.value': 'SHUT_IN_CLOSING_TIME', // Shut-in Cycle - Closing Time
        'lin12.value': 'SHUT_IN_OPENING_TIME', // Shut-in Cycle - Opening Time
        'lin13.value': 'SHUT_IN_OPENING_PRE', // Shut-in Cycle - Opening Pressure
        'lin14.value': 'SHUT_IN_MIN_CLOSED_VALVE_TIME', // Shut-in Cycle - Min. Closed Valve Time
        'lin15.value': 'SHUT_IN_MAX_CLOSED_VALVE_TIME', // Shut-in Cycle - Max. Closed Valve Time
        'lin16.value': 'SHUT_IN_MIN_OPEN_VALVE_TIME', // Shut-in Cycle - Min. Open Valve Time
        'lin17.value': 'SHUT_IN_MAX_OPEN_VALVE_TIME', // Shut-in Cycle - Max. Open Valve Time
        'lin18.value': 'MAINT_CYCLES_OPENING_MODE', // Maintenance Cycles - Opening Mode
        'lin19.value': 'MAINT_CYCLES_CLOSING_MODE', // Maintenance Cycles - Closing Mode
        'lin20.value': 'MAINT_CYCLES_CLOSING_TIME', // Maintenance Cycles - Closing Time
        'lin21.value': 'MAINT_CYCLES_OPENING_TIME', // Maintenance Cycles - Opening Time
        'lin22.value': 'MAINT_CYCLES_OPENING_PRE', // Maintenance Cycles - Opening Pressure
        'lin23.value': 'MAX_PRE_TO_OPEN', // Max. Line Pressure To Open
        'lin24.value': 'MAINT_CYCLES_MIN_CLOSED_VALVE_TIME', // Maintenance Cycles - Min. Closed Valve Time
        'lin26.value': 'MAINT_CYCLES_MIN_OPEN_VALVE_TIME', // Maintenance Cycles - Min. Open Valve Time
        'lin27.value': 'MAINT_CYCLES_MAX_OPEN_VALVE_TIME', // Maintenance Cycles - Max. Open Valve Time
        'lin28.value': 'WHP', // Presión de cabeza de pozo
        'lin29.value': 'LP', // Presión de linea
        'lin30.value': 'WHT', // Temperatura de cabeza de pozo
        'lin31.value': 'UPSTREAM_PRE', // Presion aguas arriba del choke
        'lin32.value': 'FLOW_REGIME', // Flujo crítico o subcrítico
        'lin33.value': 'FLOW_TYPE', // Tipo de flujo
        'lin34.value': 'SHUT_IN_MIN_TURNER', // Shut-in Cycle - Min. Turner Coefficient
        'lin35.value': 'MAINT_CYCLES_MIN_TURNER', // Maintenance Cycles - Min. Turner Coefficient
        'lin36.value': 'GAS_FLOW_RATE', // Caudal de gas
        'lin37.value': 'LIQUID_FLOW_RATE', // Caudal de liquido
        'lin38.value': 'AI1_CONNECTED', // Entrada analógica #1 - Conectado/Desconectado
        'lin39.value': 'AI2_CONNECTED', // Entrada analógica #2 - Conectado/Desconectado
        'lin40.value': 'AI3_CONNECTED', // Entrada analógica #3 - Conectado/Desconectado
        'lin41.value': 'AI4_CONNECTED', // Entrada analógica #4 - Conectado/Desconectado
        'lin42.value': 'GAS_SPECIFIC_GRAV', // Gravedad especifica del gas
        'lin43.value': 'OIL_SPECIFIC_GRAV', // Gravedad especifica del petróleo
        'lin44.value': 'WATER_SPECIFIC_GRAV', // Gravedad especifica del agua
        'lin45.value': 'OGR', // OGR
        'lin46.value': 'WGR', // WGR
        'lin47.value': 'GAS_ESPC_HEAT_CONST_VOL', // Calor especifico del gas a volúmen constante
        'lin48.value': 'GAS_ESPC_HEAT_CONST_PRE', // Calor especifico del gas a presión constante
        'lin49.value': 'LIQUID_ESPC_HEAT', // Calor especifico del liquido
        'lin50.value': 'CHOKE_ORIF_DIAMETER', // Diametro del orificio del Choke
        'lin51.value': 'UPSTREAM_TUBING_DIAMETER', // Diámetro de la cañería aguas arriba
        'lin52.value': 'SING_PHASE_GAS_FLOW_EQ_CORR', // Factor de corrección de la ecuación de flujo de gas monofásico
        'lin53.value': 'TWO_PHASE_GAS_FLOW_EQ_CORR', // Factor de corrección de la ecuación de flujo de gas de dos fases
        'lin54.value': 'TURNER_CRITICAL_VEL_EQ_CORR', // Factor de corrección de velocidad crítica de turner
        'lin55.value': 'DEFAULT_UPSTREAM_TEMP', // Temperatura predeterminada aguas arriba
        'lin56.value': 'FLUID_MODEL', // Modelo de fluido
        'lin57.value': 'CB', // Bateria CB
        'lin58.value': 'B_IDP', // IDP supply
        'lin59.value': 'PB', // PB Battery Voltaje
        'lin60.value': 'LAST_VALVE_OP', // Last Valve Operation
        'lin61.value': 'LAST_OP_CAUSE', // Last Operation Cause
        'lin62.value': 'GAS_FLOW_LEVEL', // Gas Flow Level
        'lin63.value': 'FIRMWARE', // Firmware Version
        'lin64.value': 'SERIAL_LSW', // Serial Number
        'lin65.value': 'ALTERNATIVE_USE', // Alternative use
        'lin66.value': 'TIME_TYPE', // Time Type
        'lin67.value': 'LAST_ACTION', // Last Action
        'lin68.value': 'AP', // Presión de actuador
        'lin69.value': 'SHUT_IN_CLOSING_PRE', // Shut-in Cycle - Closing Pressure
        'lin70.value': 'SHUT_IN_OPENING_RATIO', // Shut-in Cycle - Opening WHP/LP Ratio
        'lin71.value': 'SHUT_IN_CLOSING_RATIO', // Shut-in Cycle - Closing WHP/LP Ratio
        'lin72.value': 'MAINT_CYCLES_CLOSING_PRE', // Maintenance Cycles - Closing Pressure
        'lin73.value': 'MAINT_CYCLES_OPENING_RATIO', // Maintenance Cycles - Opening WHP/LP Ratio
        'lin74.value': 'MAINT_CYCLES_CLOSING_RATIO', // Maintenance Cycles - Closing WHP/LP Ratio
        'lin75.value': 'SYNC_DAY_WEEK', // Synchronism - Day Of Week
        'lin76.value': 'SYNC_HOUR', // Synchronism - Hour
        'lin77.value': 'ARRIVAL_COUNTER_MSD', // Arrival Counter BCD Most Significant Digit
        'lin78.value': 'ARRIVAL_COUNTER_MD', // Arrival Counter BCD Middle Digit
        'lin79.value': 'ARRIVAL_COUNTER_LSD', // Arrival Counter BCD Least Significant Digit
        'lin80.value': 'MAINT_CYCLES_MAX_CLOSED_VALVE_TIME', // Maintenance Cycles - Max. Closed Valve Time
        'lin81.value': 'GAS_FLOW_RATE_GUO', // Gas Flow Rate (Guo)
        'lin82.value': 'GAS_FLOW_RATE_AGA1', // Gas Flow Rate (AGA1)
        'lin83.value': 'GAS_FLOW_RATE_AGA2', // Gas Flow Rate (AGA2)
        'lin84.value': 'GAS_FLOW_RATE_SACHDEVA', // Gas Flow Rate (Sachdeva)
        'lin85.value': 'GAS_FLOW_RATE_EXT_FLOWMETER', // Gas Flow Rate (Ext. Flowmeter)
        'lin86.value': 'WELL_CONDITION', // Well Condition
        'lin87.value': 'WELL_HEAD_PRE_CONTROL', // Well head pressure CONTROL
        'lin88.value': 'LINE_PRE_CONTROL', // Line pressure CONTROL
        'lin89.value': 'GAS_FLOW_RATE_CONTROL', // Gas Flow Rate CONTROL
        'lin90.value': 'AGA_1_EQ_CORR', // AGA1 Eq. Correction Factor
        'lin91.value': 'AGA_2_EQ_CORR', // AGA2 Eq. Correction Factor
        'lin92.value': 'HYDRAULIC_FAILURE_ENABLE', // Hydraulic Failure Enabled
        'lin93.value': 'WELL_CONDITION_LOGIC_ENABLE', // Logic Based On Well Condition Enabled
        'lin100.value': 'ALARM_MODBUS_SLAVE', // Alarm - Modbus Slave - Time since last reply
        'longitude': 'LONGITUDE' // longitude
    };

    let cneModel = [
        {
            "MEASUREMENT": "CHOKE_ORIF_DIAMETER",
            "ENDPOINT_ADDRESS": "CHOKE_ORIF_DIAMETER",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "1/64 in."
        },
        {
            "MEASUREMENT": "LIQUID_FLOW_RATE",
            "ENDPOINT_ADDRESS": "LIQUID_FLOW_RATE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "BBL/DAY"
        },
        {
            "MEASUREMENT": "AI1_CONNECTED",
            "ENDPOINT_ADDRESS": "AI1_CONNECTED",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "AI2_CONNECTED",
            "ENDPOINT_ADDRESS": "AI2_CONNECTED",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "SHUT_IN_OPENING_PRE",
            "ENDPOINT_ADDRESS": "SHUT_IN_OPENING_PRE",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "AI3_CONNECTED",
            "ENDPOINT_ADDRESS": "AI3_CONNECTED",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "AI4_CONNECTED",
            "ENDPOINT_ADDRESS": "AI4_CONNECTED",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DISCONNECTED-CONNECTED"
        },
        {
            "MEASUREMENT": "FLOW_REGIME",
            "ENDPOINT_ADDRESS": "FLOW_REGIME",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "FLOW_REGIME"
        },
        {
            "MEASUREMENT": "FLOW_TYPE",
            "ENDPOINT_ADDRESS": "FLOW_TYPE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "FLOW_TYPE"
        },
        {
            "MEASUREMENT": "FLUID_MODEL",
            "ENDPOINT_ADDRESS": "FLUID_MODEL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "FLUID_MODEL"
        },
        {
            "MEASUREMENT": "UPSTREAM_TUBING_DIAMETER",
            "ENDPOINT_ADDRESS": "UPSTREAM_TUBING_DIAMETER",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "in."
        },
        {
            "MEASUREMENT": "MAINT_CYCLES_CLOSING_MODE",
            "ENDPOINT_ADDRESS": "MAINT_CYCLES_CLOSING_MODE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "MC-ClosingMod"
        },
        {
            "MEASUREMENT": "MAINT_CYCLES_OPENING_MODE",
            "ENDPOINT_ADDRESS": "MAINT_CYCLES_OPENING_MODE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "MC-OpeningMod"
        },
        {
            "MEASUREMENT": "GAS_FLOW_RATE",
            "ENDPOINT_ADDRESS": "GAS_FLOW_RATE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "MMSCFD"
        },
        {
            "MEASUREMENT": "MAINT_CYCLES_OPENING_PRE",
            "ENDPOINT_ADDRESS": "MAINT_CYCLES_OPENING_PRE",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "MAX_PRE_TO_OPEN",
            "ENDPOINT_ADDRESS": "MAX_PRE_TO_OPEN",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "OPMODE",
            "ENDPOINT_ADDRESS": "OPMODE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "OPMODE"
        },
        {
            "MEASUREMENT": "SHUT_IN_CLOSING_MODE",
            "ENDPOINT_ADDRESS": "SHUT_IN_CLOSING_MODE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SC-ClosingMod"
        },
        {
            "MEASUREMENT": "SHUT_IN_OPENING_MODE",
            "ENDPOINT_ADDRESS": "SHUT_IN_OPENING_MODE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SC-OpeningMod"
        },
        {
            "MEASUREMENT": "OGR",
            "ENDPOINT_ADDRESS": "OGR",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SCF/STB"
        },
        {
            "MEASUREMENT": "WHP",
            "ENDPOINT_ADDRESS": "WHP",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "LP",
            "ENDPOINT_ADDRESS": "LP",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "WGR",
            "ENDPOINT_ADDRESS": "WGR",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SCF/STB"
        },
        {
            "MEASUREMENT": "WHT",
            "ENDPOINT_ADDRESS": "WHT",
            "URL_TYPE": "API_URL_TEMPERATURE",
            "VARIABLE_TYPE": "CELSIUS"
        },
        {
            "MEASUREMENT": "UPSTREAM_PRE",
            "ENDPOINT_ADDRESS": "UPSTREAM_PRE",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "SHUT_IN_MIN_TURNER",
            "ENDPOINT_ADDRESS": "SHUT_IN_MIN_TURNER",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "MAINT_CYCLES_MIN_TURNER",
            "ENDPOINT_ADDRESS": "MAINT_CYCLES_MIN_TURNER",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "GAS_SPECIFIC_GRAV",
            "ENDPOINT_ADDRESS": "GAS_SPECIFIC_GRAV",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "OIL_SPECIFIC_GRAV",
            "ENDPOINT_ADDRESS": "OIL_SPECIFIC_GRAV",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "WATER_SPECIFIC_GRAV",
            "ENDPOINT_ADDRESS": "WATER_SPECIFIC_GRAV",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "SING_PHASE_GAS_FLOW_EQ_CORR",
            "ENDPOINT_ADDRESS": "SING_PHASE_GAS_FLOW_EQ_CORR",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "TWO_PHASE_GAS_FLOW_EQ_CORR",
            "ENDPOINT_ADDRESS": "TWO_PHASE_GAS_FLOW_EQ_CORR",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "TURNER_CRITICAL_VEL_EQ_CORR",
            "ENDPOINT_ADDRESS": "TURNER_CRITICAL_VEL_EQ_CORR",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "GAS_ESPC_HEAT_CONST_VOL",
            "ENDPOINT_ADDRESS": "GAS_ESPC_HEAT_CONST_VOL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SPECIFIC-HEAT"
        },
        {
            "MEASUREMENT": "GAS_ESPC_HEAT_CONST_PRE",
            "ENDPOINT_ADDRESS": "GAS_ESPC_HEAT_CONST_PRE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SPECIFIC-HEAT"
        },
        {
            "MEASUREMENT": "LIQUID_ESPC_HEAT",
            "ENDPOINT_ADDRESS": "LIQUID_ESPC_HEAT",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SPECIFIC-HEAT"
        },
        {
            "MEASUREMENT": "LAST_SHUT_IN_DAY",
            "ENDPOINT_ADDRESS": "LAST_SHUT_IN_DAY",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-DAY"
        },
        {
            "MEASUREMENT": "SHUT_IN_REP_INTERVAL",
            "ENDPOINT_ADDRESS": "SHUT_IN_REP_INTERVAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-HOUR-CUSTOM"
        },
        {
            "MEASUREMENT": "LAST_SHUT_IN_HOUR",
            "ENDPOINT_ADDRESS": "LAST_SHUT_IN_HOUR",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-HOUR-CUSTOM"
        },
        {
            "MEASUREMENT": "SHUT_IN_CLOSING_TIME",
            "ENDPOINT_ADDRESS": "SHUT_IN_CLOSING_TIME",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN-CUSTOM"
        },
        {
            "MEASUREMENT": "SHUT_IN_OPENING_TIME",
            "ENDPOINT_ADDRESS": "SHUT_IN_OPENING_TIME",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN-CUSTOM"
        },
        {
            "MEASUREMENT": "SHUT_IN_MIN_CLOSED_VALVE_TIME",
            "ENDPOINT_ADDRESS": "SHUT_IN_MIN_CLOSED_VALVE_TIME",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN-CUSTOM"
        },
        {
            "MEASUREMENT": "SHUT_IN_MAX_CLOSED_VALVE_TIME",
            "ENDPOINT_ADDRESS": "SHUT_IN_MAX_CLOSED_VALVE_TIME",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN-CUSTOM"
        },
        {
            "MEASUREMENT": "SHUT_IN_MIN_OPEN_VALVE_TIME",
            "ENDPOINT_ADDRESS": "SHUT_IN_MIN_OPEN_VALVE_TIME",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN-CUSTOM"
        },
        {
            "MEASUREMENT": "SHUT_IN_MAX_OPEN_VALVE_TIME",
            "ENDPOINT_ADDRESS": "SHUT_IN_MAX_OPEN_VALVE_TIME",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN-CUSTOM"
        },
        {
            "MEASUREMENT": "CLOSED_VALVE_TIME_COUNTER",
            "ENDPOINT_ADDRESS": "CLOSED_VALVE_TIME_COUNTER",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN-CUSTOM"
        },
        {
            "MEASUREMENT": "MAINT_CYCLES_CLOSING_TIME",
            "ENDPOINT_ADDRESS": "MAINT_CYCLES_CLOSING_TIME",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN-CUSTOM"
        },
        {
            "MEASUREMENT": "MAINT_CYCLES_OPENING_TIME",
            "ENDPOINT_ADDRESS": "MAINT_CYCLES_OPENING_TIME",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN-CUSTOM"
        },
        {
            "MEASUREMENT": "MAINT_CYCLES_MIN_CLOSED_VALVE_TIME",
            "ENDPOINT_ADDRESS": "MAINT_CYCLES_MIN_CLOSED_VALVE_TIME",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN-CUSTOM"
        },
        {
            "MEASUREMENT": "MAINT_CYCLES_MAX_CLOSED_VALVE_TIME",
            "ENDPOINT_ADDRESS": "MAINT_CYCLES_MAX_CLOSED_VALVE_TIME",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN-CUSTOM"
        },
        {
            "MEASUREMENT": "MAINT_CYCLES_MIN_OPEN_VALVE_TIME",
            "ENDPOINT_ADDRESS": "MAINT_CYCLES_MIN_OPEN_VALVE_TIME",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN-CUSTOM"
        },
        {
            "MEASUREMENT": "MAINT_CYCLES_MAX_OPEN_VALVE_TIME",
            "ENDPOINT_ADDRESS": "MAINT_CYCLES_MAX_OPEN_VALVE_TIME",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN-CUSTOM"
        },
        {
            "MEASUREMENT": "OPEN_VALVE_TIME_COUNTER",
            "ENDPOINT_ADDRESS": "OPEN_VALVE_TIME_COUNTER",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MIN-CUSTOM"
        },
        {
            "MEASUREMENT": "LAST_SHUT_IN_MONTH",
            "ENDPOINT_ADDRESS": "LAST_SHUT_IN_MONTH",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME-MONTH"
        },
        {
            "MEASUREMENT": "DEFAULT_UPSTREAM_TEMP",
            "ENDPOINT_ADDRESS": "DEFAULT_UPSTREAM_TEMP",
            "URL_TYPE": "API_URL_TEMPERATURE",
            "VARIABLE_TYPE": "CELSIUS"
        },
        {
            "MEASUREMENT": "VALVE_STATUS",
            "ENDPOINT_ADDRESS": "VALVE_STATUS",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "VALVE_STATUS"
        },
        {
            "MEASUREMENT": "CB",
            "ENDPOINT_ADDRESS": "CB",
            "URL_TYPE": "API_URL_VOLTAGE",
            "VARIABLE_TYPE": "VOLT*10"
        },
        {
            "MEASUREMENT": "B_IDP",
            "ENDPOINT_ADDRESS": "B_IDP",
            "URL_TYPE": "API_URL_VOLTAGE",
            "VARIABLE_TYPE": "VOLT*10"
        },
        {
            "MEASUREMENT": "PB",
            "ENDPOINT_ADDRESS": "PB",
            "URL_TYPE": "API_URL_VOLTAGE",
            "VARIABLE_TYPE": "VOLT*10"
        },
        {
            "MEASUREMENT": "LAST_VALVE_OP",
            "ENDPOINT_ADDRESS": "LAST_VALVE_OP",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LAST_VALVE_OP"
        },
        {
            "MEASUREMENT": "LAST_OP_CAUSE",
            "ENDPOINT_ADDRESS": "LAST_OP_CAUSE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LAST_OP_CAUSE"
        },
        {
            "MEASUREMENT": "GAS_FLOW_LEVEL",
            "ENDPOINT_ADDRESS": "GAS_FLOW_LEVEL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "MMSCFD"
        },
        {
            "MEASUREMENT": "FIRMWARE",
            "ENDPOINT_ADDRESS": "FIRMWARE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "SERIAL_LSW",
            "ENDPOINT_ADDRESS": "SERIAL_LSW",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "ALTERNATIVE_USE",
            "ENDPOINT_ADDRESS": "ALTERNATIVE_USE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ALTERNATIVE_USE"
        },
        {
            "MEASUREMENT": "CMD_OPEN",
            "ENDPOINT_ADDRESS": "CMD_OPEN",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "COMMAND_ON"
        },
        {
            "MEASUREMENT": "ARRIVAL_COUNTER",
            "ENDPOINT_ADDRESS": "ARRIVAL_COUNTER",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "CMD_CLOSE",
            "ENDPOINT_ADDRESS": "CMD_CLOSE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "COMMAND_ON"
        },
        {
            "MEASUREMENT": "CMD_RST_ERR",
            "ENDPOINT_ADDRESS": "CMD_RST_ERR",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "COMMAND_ON"
        },
        {
            "MEASUREMENT": "CMD_RESET",
            "ENDPOINT_ADDRESS": "CMD_RESET",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "COMMAND_ON"
        },
        {
            "MEASUREMENT": "TIME_TYPE",
            "ENDPOINT_ADDRESS": "TIME_TYPE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME_TYPE"
        },
        {
            "MEASUREMENT": "LAST_ACTION",
            "ENDPOINT_ADDRESS": "LAST_ACTION",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LAST_ACTION"
        },
        {
            "MEASUREMENT": "LAST_ACTION_ALARMS",
            "ENDPOINT_ADDRESS": "LAST_ACTION_ALARMS",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "LAST_ACTION"
        },
        {
            "MEASUREMENT": "FIRMWARE_CHANGED",
            "ENDPOINT_ADDRESS": "FIRMWARE_CHANGED",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "FIRMWARE_CHANGED"
        },
        {
            "MEASUREMENT": "LAST_ONLINE_TIME",
            "ENDPOINT_ADDRESS": "LAST_ONLINE_TIME",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME"
        },
        {
            "MEASUREMENT": "VC_VALVE_STATUS",
            "ENDPOINT_ADDRESS": "VC_VALVE_STATUS",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "VALVE_STATUS"
        },
        {
            "MEASUREMENT": "VC_OP_MODE",
            "ENDPOINT_ADDRESS": "VC_OP_MODE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "OPMODE"
        },
        {
            "MEASUREMENT": "VC_OPEN_TIME",
            "ENDPOINT_ADDRESS": "VC_OPEN_TIME",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME_HH:MM"
        },
        {
            "MEASUREMENT": "VC_CLOSE_TIME",
            "ENDPOINT_ADDRESS": "VC_CLOSE_TIME",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "TIME_HH:MM"
        },
        {
            "MEASUREMENT": "VC_WHP_MIN",
            "ENDPOINT_ADDRESS": "VC_WHP_MIN",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "VC_WHP_PRO",
            "ENDPOINT_ADDRESS": "VC_WHP_PRO",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "VC_WHP_MAX",
            "ENDPOINT_ADDRESS": "VC_WHP_MAX",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "VC_GAS_FLOW_RATE_MIN",
            "ENDPOINT_ADDRESS": "VC_GAS_FLOW_RATE_MIN",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "MMSCFD"
        },
        {
            "MEASUREMENT": "VC_GAS_FLOW_RATE_MAX",
            "ENDPOINT_ADDRESS": "VC_GAS_FLOW_RATE_MAX",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "MMSCFD"
        },
        {
            "MEASUREMENT": "VC_ESTIMATED_GAS_PROD",
            "ENDPOINT_ADDRESS": "VC_ESTIMATED_GAS_PROD",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "KG/CM2"
        },
        {
            "MEASUREMENT": "VC_VAR_ESTIMATED_GAS_PROD",
            "ENDPOINT_ADDRESS": "VC_VAR_ESTIMATED_GAS_PROD",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "VC_VAR_ESTIMATED_GAS_PROD_DISCRETA",
            "ENDPOINT_ADDRESS": "VC_VAR_ESTIMATED_GAS_PROD_DISCRETA",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "VARIACION_DISCRETA"
        },
        {
            "MEASUREMENT": "VC_VAR_ESTIMATED_GAS_PROD_SEMANAL",
            "ENDPOINT_ADDRESS": "VC_VAR_ESTIMATED_GAS_PROD_SEMANAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "VC_VAR_ESTIMATED_GAS_PROD_DISCRETA_SEMANAL",
            "ENDPOINT_ADDRESS": "VC_VAR_ESTIMATED_GAS_PROD_DISCRETA_SEMANAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "VARIACION_DISCRETA"
        },
        {
            "MEASUREMENT": "VC_WHP_MIN_SEMANAL",
            "ENDPOINT_ADDRESS": "VC_WHP_MIN_SEMANAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "KG/CM2"
        },
        {
            "MEASUREMENT": "VC_WHP_PRO_SEMANAL",
            "ENDPOINT_ADDRESS": "VC_WHP_PRO_SEMANAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "KG/CM2"
        },
        {
            "MEASUREMENT": "VC_WHP_MAX_SEMANAL",
            "ENDPOINT_ADDRESS": "VC_WHP_MAX_SEMANAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "KG/CM2"
        },
        {
            "MEASUREMENT": "VC_GAS_FLOW_RATE_MIN_SEMANAL",
            "ENDPOINT_ADDRESS": "VC_GAS_FLOW_RATE_MIN_SEMANAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ACCUM_FLOW"
        },
        {
            "MEASUREMENT": "VC_GAS_FLOW_RATE_MAX_SEMANAL",
            "ENDPOINT_ADDRESS": "VC_GAS_FLOW_RATE_MAX_SEMANAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ACCUM_FLOW"
        },
        {
            "MEASUREMENT": "VC_ESTIMATED_GAS_PROD_SEMANAL",
            "ENDPOINT_ADDRESS": "VC_ESTIMATED_GAS_PROD_SEMANAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ACCUM_FLOW"
        },
        {
            "MEASUREMENT": "VC_GAS_PROD_ACUM_SEMANAL",
            "ENDPOINT_ADDRESS": "VC_GAS_PROD_ACUM_SEMANAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ACCUM_FLOW"
        },
        {
            "MEASUREMENT": "VC_ESTADO_ABIERTO_SEMANAL",
            "ENDPOINT_ADDRESS": "VC_ESTADO_ABIERTO_SEMANAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "VC_ESTADO_CERRADO_SEMANAL",
            "ENDPOINT_ADDRESS": "VC_ESTADO_CERRADO_SEMANAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "VC_MODO_AUTOMATICO",
            "ENDPOINT_ADDRESS": "VC_MODO_AUTOMATICO",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "VC_MODO_MANUAL",
            "ENDPOINT_ADDRESS": "VC_MODO_MANUAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "LP_KGCM2",
            "ENDPOINT_ADDRESS": "LP_KGCM2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "KG/CM2"
        },
        {
            "MEASUREMENT": "WHP_KGCM2",
            "ENDPOINT_ADDRESS": "WHP_KGCM2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "KG/CM2"
        },
        {
            "MEASUREMENT": "GAS_FLOW_RATE_PER_DAY",
            "ENDPOINT_ADDRESS": "GAS_FLOW_RATE_PER_DAY",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ACCUM_FLOW"
        },
        {
            "MEASUREMENT": "AP",
            "ENDPOINT_ADDRESS": "AP",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "SHUT_IN_CLOSING_PRE",
            "ENDPOINT_ADDRESS": "SHUT_IN_CLOSING_PRE",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "SHUT_IN_OPENING_RATIO",
            "ENDPOINT_ADDRESS": "SHUT_IN_OPENING_RATIO",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "SHUT_IN_CLOSING_RATIO",
            "ENDPOINT_ADDRESS": "SHUT_IN_CLOSING_RATIO",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "MAINT_CYCLES_CLOSING_PRE",
            "ENDPOINT_ADDRESS": "MAINT_CYCLES_CLOSING_PRE",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "MAINT_CYCLES_OPENING_RATIO",
            "ENDPOINT_ADDRESS": "MAINT_CYCLES_OPENING_RATIO",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "MAINT_CYCLES_CLOSING_RATIO",
            "ENDPOINT_ADDRESS": "MAINT_CYCLES_CLOSING_RATIO",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "SYNC_DAY_WEEK",
            "ENDPOINT_ADDRESS": "SYNC_DAY_WEEK",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "DICTIONARY_DAY_WEEK"
        },
        {
            "MEASUREMENT": "SYNC_HOUR",
            "ENDPOINT_ADDRESS": "SYNC_HOUR",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "VC_VAR_ESTIMATED_GAS_PROD_MENSUAL",
            "ENDPOINT_ADDRESS": "VC_VAR_ESTIMATED_GAS_PROD_MENSUAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "VC_VAR_ESTIMATED_GAS_PROD_DISCRETA_MENSUAL",
            "ENDPOINT_ADDRESS": "VC_VAR_ESTIMATED_GAS_PROD_DISCRETA_MENSUAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "VARIACION_DISCRETA"
        },
        {
            "MEASUREMENT": "VC_WHP_MIN_MENSUAL",
            "ENDPOINT_ADDRESS": "VC_WHP_MIN_MENSUAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "KG/CM2"
        },
        {
            "MEASUREMENT": "VC_WHP_PRO_MENSUAL",
            "ENDPOINT_ADDRESS": "VC_WHP_PRO_MENSUAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "KG/CM2"
        },
        {
            "MEASUREMENT": "VC_WHP_MAX_MENSUAL",
            "ENDPOINT_ADDRESS": "VC_WHP_MAX_MENSUAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "KG/CM2"
        },
        {
            "MEASUREMENT": "VC_GAS_FLOW_RATE_MIN_MENSUAL",
            "ENDPOINT_ADDRESS": "VC_GAS_FLOW_RATE_MIN_MENSUAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ACCUM_FLOW"
        },
        {
            "MEASUREMENT": "VC_GAS_FLOW_RATE_MAX_MENSUAL",
            "ENDPOINT_ADDRESS": "VC_GAS_FLOW_RATE_MAX_MENSUAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ACCUM_FLOW"
        },
        {
            "MEASUREMENT": "VC_ESTIMATED_GAS_PROD_MENSUAL",
            "ENDPOINT_ADDRESS": "VC_ESTIMATED_GAS_PROD_MENSUAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ACCUM_FLOW"
        },
        {
            "MEASUREMENT": "VC_GAS_PROD_ACUM_MENSUAL",
            "ENDPOINT_ADDRESS": "VC_GAS_PROD_ACUM_MENSUAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ACCUM_FLOW"
        },
        {
            "MEASUREMENT": "VC_ESTADO_ABIERTO_MENSUAL",
            "ENDPOINT_ADDRESS": "VC_ESTADO_ABIERTO_MENSUAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "VC_ESTADO_CERRADO_MENSUAL",
            "ENDPOINT_ADDRESS": "VC_ESTADO_CERRADO_MENSUAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "VC_MODO_AUTOMATICO_MENSUAL",
            "ENDPOINT_ADDRESS": "VC_MODO_AUTOMATICO_MENSUAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "VC_MODO_MANUAL_MENSUAL",
            "ENDPOINT_ADDRESS": "VC_MODO_MANUAL_MENSUAL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "%"
        },
        {
            "MEASUREMENT": "VC_ANOMALIES",
            "ENDPOINT_ADDRESS": "VC_ANOMALIES",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ANOMALIES"
        },
        {
            "MEASUREMENT": "GAS_FLOW_RATE_SACHDEVA",
            "ENDPOINT_ADDRESS": "GAS_FLOW_RATE_SACHDEVA",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "MMSCFD"
        },
        {
            "MEASUREMENT": "GAS_FLOW_RATE_GUO",
            "ENDPOINT_ADDRESS": "GAS_FLOW_RATE_GUO",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "MMSCFD"
        },
        {
            "MEASUREMENT": "GAS_FLOW_RATE_AGA1",
            "ENDPOINT_ADDRESS": "GAS_FLOW_RATE_AGA1",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "MMSCFD"
        },
        {
            "MEASUREMENT": "GAS_FLOW_RATE_AGA2",
            "ENDPOINT_ADDRESS": "GAS_FLOW_RATE_AGA2",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "MMSCFD"
        },
        {
            "MEASUREMENT": "GAS_FLOW_RATE_EXT_FLOWMETER",
            "ENDPOINT_ADDRESS": "GAS_FLOW_RATE_EXT_FLOWMETER",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "MMSCFD"
        },
        {
            "MEASUREMENT": "WELL_CONDITION",
            "ENDPOINT_ADDRESS": "WELL_CONDITION",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "WELL_CONDITION"
        },
        {
            "MEASUREMENT": "WELL_HEAD_PRE_CONTROL",
            "ENDPOINT_ADDRESS": "WELL_HEAD_PRE_CONTROL",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "LINE_PRE_CONTROL",
            "ENDPOINT_ADDRESS": "LINE_PRE_CONTROL",
            "URL_TYPE": "API_URL_PRESSURE",
            "VARIABLE_TYPE": "PSI"
        },
        {
            "MEASUREMENT": "GAS_FLOW_RATE_CONTROL",
            "ENDPOINT_ADDRESS": "GAS_FLOW_RATE_CONTROL",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "MMSCFD"
        },
        {
            "MEASUREMENT": "AGA_1_EQ_CORR",
            "ENDPOINT_ADDRESS": "AGA_1_EQ_CORR",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "AGA_2_EQ_CORR",
            "ENDPOINT_ADDRESS": "AGA_2_EQ_CORR",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "SIN_UNIDAD"
        },
        {
            "MEASUREMENT": "HYDRAULIC_FAILURE_ENABLE",
            "ENDPOINT_ADDRESS": "HYDRAULIC_FAILURE_ENABLE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        },
        {
            "MEASUREMENT": "WELL_CONDITION_LOGIC_ENABLE",
            "ENDPOINT_ADDRESS": "WELL_CONDITION_LOGIC_ENABLE",
            "URL_TYPE": "API_URL_GENERIC",
            "VARIABLE_TYPE": "ENABLED-DISABLED"
        }
    ];

    let dataJSON = payload.asJsonObject();
    let currentUnixDate = Date.parse(new Date());
    let contador = 0;

    function parseaValor(measure, urlType, variableType) {
        if (urlType == "API_URL_PRESSURE") {
            if (variableType == "PSI") measure = measure * 6894.757;
            if (variableType == "hPa") measure = measure * 100;

            return parseFloat(measure);
        }

        if (urlType == "API_URL_TEMPERATURE") {

            return parseFloat(measure);
        }

        if (urlType == "API_URL_GENERIC") {
            // env.log(typeof (measure) + ":");
            // env.log(measure);
            if (variableType == "TIME-MIN") measure = measure * 60;
            if (variableType == "TIME-HOUR") measure = measure * 3600;
            if (variableType == "TIME-MIN-CUSTOM") measure = (measure * 1.0).toFixed(2);
            if (variableType == "TIME-SECONDStoMIN") measure = Math.round(measure / 60);
            if (variableType == "MMSCFD") measure = (measure * 1177.17).toFixed(2);
            if (variableType == "BBL/DAY")
                measure = (measure * 0.006624470622).toFixed(2);
            if (variableType == "cm/s") measure = (measure * 0.036).toFixed(2);
            if (variableType == "LEVEL-MM/100") measure = measure * 100;
            if (
                variableType == "COEFFICIENT" ||
                variableType == "FLOAT" ||
                variableType == "SCF/STB" ||
                variableType == "SPECIFIC-HEAT"
            )
                measure = (measure * 1.0).toFixed(3);

            measure = (measure * 1.0).toFixed(3);

            // env.log(typeof (measure) + ":");
            // env.log(measure);
            return parseFloat(measure);
        }

        if (urlType == "API_URL_HUMIDITY") {

            return parseFloat(measure);
        }

        if (urlType == "API_URL_VOLTAGE") {
            measure = measure * 0.1;

            return parseFloat(measure);
        }

        if (urlType == "API_URL_WEIGHT") {

            if (variableType == "LBS") measure = measure * 453.592;

            return parseFloat(measure);
        }

        if (urlType == "CARGA_HISTORICO") {
            if (variableType == "pressurePascals") measure = measure;
            //if (variableType == "pressurePSI") measure = measure * 6894.757;
            measure = (measure * 1.0).toFixed(3);

            return parseFloat(measure);
        }

        return measure;

    };


    if (dataJSON.Site == "MOTO MECANICA (ARG)") {
        env.log("site : " + dataJSON.Site);

        dataJSON.data.forEach((element) => {
            let sensor = device.endpoints.byAddress(mappingCNE[element.tagname]);
            if (sensor != null && element.value != 65535) {
                let meassureInfo = cneModel.find(
                    (item) => mappingCNE[element.tagname] == item.MEASUREMENT
                );

                // Saco la validacion por tiempo porque ya no es necesaria 07/07/22
                //if (((currentUnixDate / 1000) - element.ts) <= 3600) {
                if (true) {

                    if (meassureInfo) {

                        let sensorValue = parseaValor(
                            parseFloat(element.value.replace(",", ".")),
                            meassureInfo.URL_TYPE,
                            meassureInfo.VARIABLE_TYPE
                        );
                        if (sensorValue == NaN) env.log("Valor del sensor: NaN");

                        if (sensorValue != "NaN") {
                            sensorValue = parseFloat(sensorValue);
                            let timeUTC = new Date((element.ts - 20) * 1000).toUTCString();
                            // env.log("actualiza: " + mappingCNE[element.tagname] + " - con : " + sensorValue);
                            // env.log("deberia actualizar con: " + mappingCNE[element.tagname] + " - con : " + element.value);
                            try {
                                switch (meassureInfo.URL_TYPE) {
                                    case "API_URL_PRESSURE":
                                        //env.log("actualiza sensor de presion");
                                        sensor.updatePressureSensorStatus(sensorValue, timeUTC);
                                        contador++;


                                        // Convierto Pascales a kg/cm2 para almacenarlo en otras variables que no sean las de PSI
                                        if (mappingCNE[element.tagname] == "LP") {
                                            sensorValue = (sensorValue / 98067).toFixed(2);
                                            device.endpoints.byAddress("LP_KGCM2").updateGenericSensorStatus(sensorValue, timeUTC);
                                            contador++;
                                        }
                                        if (mappingCNE[element.tagname] == "WHP") {
                                            sensorValue = (sensorValue / 98067).toFixed(2);
                                            device.endpoints.byAddress("WHP_KGCM2").updateGenericSensorStatus(sensorValue, timeUTC);
                                            contador++;
                                        }
                                        break;

                                    case "API_URL_TEMPERATURE":
                                        //env.log("actualiza sensor de temperatura");
                                        sensor.updateTemperatureSensorStatus(sensorValue, timeUTC);
                                        contador++;
                                        break;

                                    case "API_URL_GENERIC":
                                        //env.log("actualiza sensor generico");
                                        sensor.updateGenericSensorStatus(sensorValue, timeUTC);
                                        contador++;

                                        // Duplica el valor del flujo de gas para tenerlo en la unidad m³/d en otra variable:
                                        if (mappingCNE[element.tagname] == "GAS_FLOW_RATE") {
                                            sensorValue = (sensorValue * 24.0).toFixed(3);
                                            device.endpoints.byAddress("GAS_FLOW_RATE_PER_DAY").updateGenericSensorStatus(sensorValue, timeUTC);
                                            contador++;
                                        }

                                        // Duplico el valor para usar el endpoint de alertas
                                        if (mappingCNE[element.tagname] == "LAST_ACTION") {
                                            device.endpoints.byAddress("LAST_ACTION_ALARMS").updateGenericSensorStatus(sensorValue, timeUTC);
                                            contador++;
                                        }

                                        break;

                                    case "API_URL_HUMIDITY":
                                        //env.log("actualiza sensor de humedad");
                                        sensor.updateHumiditySensorStatus(sensorValue, timeUTC);
                                        contador++;
                                        break;

                                    case "API_URL_VOLTAGE":
                                        //env.log("actualiza sensor de voltage");
                                        sensor.updateVoltageSensorStatus(sensorValue, timeUTC);
                                        contador++;
                                        break;

                                    case "API_URL_WEIGHT":
                                        //env.log("actualiza sensor de peso");
                                        sensor.updateWeightSensorStatus(sensorValue, timeUTC);
                                        contador++;
                                        break;

                                    default:
                                        env.log("no actualiza: " + meassureInfo.URL_TYPE);
                                        break;
                                }
                            } catch {
                                env.log("error en el switch");
                            }
                        }
                    } else env.log("Medida fuera del modelo: " + mappingCNE[element.tagname]);
                } else env.log(`Timestamp viejo: ${mappingCNE[element.tagname]} - ${element.tagname}`);
            } else env.log(`No se encontró endpoint de: ${mappingCNE[element.tagname]} - ${element.tagname}`);
        });


        // Actualiza Arrival Counter:
        let arribalCounter, arribalCounterEndpoint, arribalCounterMSD, arribalCounterMD, arribalCounterLSG;
        try {
            arribalCounterEndpoint = device.endpoints.byAddress("ARRIVAL_COUNTER");
            if (arribalCounterEndpoint != null) {
                let timeUTC = new Date(dataJSON.data.find(row => row.tagname == "lin8.value").ts * 1000).toUTCString();

                arribalCounterMSD = dataJSON.data.find(row => row.tagname == "lin77.value").value;
                arribalCounterMD = dataJSON.data.find(row => row.tagname == "lin78.value").value;
                arribalCounterLSG = dataJSON.data.find(row => row.tagname == "lin79.value").value;
                arribalCounter = arribalCounterMSD + arribalCounterMD + arribalCounterLSG;


                if (arribalCounter) {
                    arribalCounterEndpoint.updateGenericSensorStatus(arribalCounter, timeUTC);
                    contador = contador + 1;
                    env.log("-------> ARRIVAL COUNTER: " + arribalCounter + " <-------");
                }
            }
        } catch (err) { env.log(err) }
    }

    // // Actualiza Ubicación:
    // let latitud, longitud;
    // try {
    //     latitud = dataJSON.data.find(row => row.tagname == "latitude").value.replace(",", ".");
    //     longitud = dataJSON.data.find(row => row.tagname == "longitude").value.replace(",", ".");
    // } catch (err) { env.log(err) }
    // if (latitud && longitud) {
    //     device.updateDeviceGeolocation(latitud, longitud);
    //     env.log("-------> latitud: " + latitud + " - longitud: " + longitud + " <-------");
    // }

    // Actualiza version de Firmware:
    let firmwareVersion;
    try {
        firmwareVersion = dataJSON.data.find(element => element.tagname == "lin63.value").value;
    } catch { }
    if (firmwareVersion) {
        firmwareVersion = (firmwareVersion / 100).toString();
        device.updateDeviceFirmwareVersion(firmwareVersion);

        // dispara notificación si la version de firmware es cambiada 
        if (firmwareVersion != "1.16") {
            firmwareChangedEndpoint = device.endpoints.byAddress("FIRMWARE_CHANGED");
            firmwareChangedEndpoint.updateGenericSensorStatus(1);
        }
    }


    if (dataJSON.Site == "Carga Historico") {
        env.log("site : " + dataJSON.Site);

        dataJSON.data.forEach((element) => {
            let sensor = device.endpoints.byAddress(element.address);
            if (sensor != null && element.value != 65535) {
                let meassureInfo = cneModel.find(
                    (item) => element.address == item.MEASUREMENT
                );

                let sensorValue = parseaValor(
                    parseFloat(element.value),
                    "CARGA_HISTORICO",
                    element.variableType
                );
                if (sensorValue == NaN) env.log("Valor del sensor: NaN");

                if (sensorValue != "NaN") {
                    sensorValue = parseFloat(sensorValue);
                    let timeUTC = new Date(element.ts).toUTCString();
                    try {
                        switch (meassureInfo.URL_TYPE) {
                            case "API_URL_PRESSURE":
                                env.log("actualiza sensor de presion");
                                sensor.updatePressureSensorStatus(sensorValue, timeUTC);
                                contador++
                                break;

                            case "API_URL_TEMPERATURE":
                                env.log("actualiza sensor de temperatura");
                                sensor.updateTemperatureSensorStatus(sensorValue, timeUTC);
                                contador++
                                break;

                            case "API_URL_GENERIC":
                                env.log("actualiza sensor generico");
                                env.log(timeUTC);
                                sensor.updateGenericSensorStatus(sensorValue, timeUTC);
                                contador++

                                break;

                            case "API_URL_HUMIDITY":
                                env.log("actualiza sensor de humedad");
                                sensor.updateHumiditySensorStatus(sensorValue, timeUTC);
                                contador++
                                break;

                            case "API_URL_VOLTAGE":
                                env.log("actualiza sensor de voltage");
                                sensor.updateVoltageSensorStatus(sensorValue, timeUTC);
                                contador++
                                break;

                            case "API_URL_WEIGHT":
                                env.log("actualiza sensor de peso");
                                sensor.updateWeightSensorStatus(sensorValue, timeUTC);
                                contador++
                                break;

                            default:
                                env.log("no actualiza: " + element.address);
                                break;
                        }
                    } catch (err) {
                        env.log("problemas con el time seguro: " + err);
                    }
                }
            } else
                env.log(
                    `No se encontró endpoint de: ${element.address} - ${element.tagname}`
                );
        });
    }
    //ultima vez que el dispositivo recibió un dato de actualizacion por mqtt:

    env.log("Contador: " + contador);
    try {
        if (contador > 0) {
            device.endpoints.byAddress("LAST_ONLINE_TIME").updateGenericSensorStatus(currentUnixDate / 1000)
        }
    } catch {
        env.log("no se encontró endpoint 'LAST_ONLINE_TIME'");
    }

    // Ya no es necesario forzar ningun error
    // Fuerza un error si no se actualizó ningun endpoint, para evitar que el dispositivo piense que está en linea:
    // if (contador == 0) device.endpoints.byAddress("LAST_ONLINE_TIME").updateGenericSensorStatus(currentUnixDate / 1000, "error");
}

function buildDownlink(device, endpoint, command, payload) {
    payload.buildResult = downlinkBuildResult.ok;



    //reemplazar las variables por los datos enviados por el metodo downlink
    let address = endpoint.address;
    let value = command.management.setValue.newValue;

    if (address == 'SHUT_IN_OPENING_PRE') value = value / 6894.7;
    if (address == 'MAINT_CYCLES_OPENING_PRE') value = value / 6894.7;
    if (address == 'MAX_PRE_TO_OPEN') value = value / 6894.7;
    if (address == 'SHUT_IN_CLOSING_PRE') value = value / 6894.7;
    if (address == 'MAINT_CYCLES_CLOSING_PRE') value = value / 6894.7;
    if (address == 'WELL_HEAD_PRE_CONTROL') value = value / 6894.7;
    if (address == 'LINE_PRE_CONTROL') value = value / 6894.7;
    if (address == 'GAS_FLOW_RATE_CONTROL') value = value / 1177.14;

    if ((address == 'CHOKE_ORIF_DIAMETER') && (value < 1 || value > 96)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (1-96).", es: "Valor ingresado fuera del rango (1-96)." };
    }
    if ((address == 'SHUT_IN_OPENING_PRE') && (value < 50 || value > 6000)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (50-6000).", es: "Valor ingresado fuera del rango (50-6000)." };
    }
    if ((address == 'UPSTREAM_TUBING_DIAMETER') && (value < 0.5 || value > 10)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0.5-10).", es: "Valor ingresado fuera del rango (0.5-10)." };
    }
    if ((address == 'MAINT_CYCLES_OPENING_PRE') && (value < 50 || value > 6000)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (50-6000).", es: "Valor ingresado fuera del rango (50-6000)." };
    }
    if ((address == 'MAX_PRE_TO_OPEN') && (value < 0 || value > 3000)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-3000).", es: "Valor ingresado fuera del rango (0-3000)." };
    }
    if ((address == 'OGR') && (value < 0 || value > 65.5)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-65.5).", es: "Valor ingresado fuera del rango (0-65.5)." };
    }
    if ((address == 'WGR') && (value < 0 || value > 65.5)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-65.5).", es: "Valor ingresado fuera del rango (0-65.5)." };
    }
    if ((address == 'SHUT_IN_MIN_TURNER') && (value < 0.1 || value > 2)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0.1-2).", es: "Valor ingresado fuera del rango (0.1-2)." };
    }
    if ((address == 'MAINT_CYCLES_MIN_TURNER') && (value < 0.2 || value > 1.8)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0.2-1.8).", es: "Valor ingresado fuera del rango (0.2-1.8)." };
    }
    if ((address == 'GAS_SPECIFIC_GRAV') && (value < 0.1 || value > 1)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0.1-1).", es: "Valor ingresado fuera del rango (0.1-1)." };
    }
    if ((address == 'OIL_SPECIFIC_GRAV') && (value < 0.001 || value > 1)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0.001-1).", es: "Valor ingresado fuera del rango (0.001-1)." };
    }
    if ((address == 'WATER_SPECIFIC_GRAV') && (value < 0.001 || value > 1.5)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0.001-1.5).", es: "Valor ingresado fuera del rango (0.001-1.5)." };
    }
    if ((address == 'SING_PHASE_GAS_FLOW_EQ_CORR') && (value < 0.1 || value > 2)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0.1-2).", es: "Valor ingresado fuera del rango (0.1-2)." };
    }
    if ((address == 'TWO_PHASE_GAS_FLOW_EQ_CORR') && (value < 0.1 || value > 10)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0.1-10).", es: "Valor ingresado fuera del rango (0.1-10)." };
    }
    if ((address == 'TURNER_CRITICAL_VEL_EQ_CORR') && (value < 0.1 || value > 2)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0.1-2).", es: "Valor ingresado fuera del rango (0.1-2)." };
    }
    if ((address == 'GAS_ESPC_HEAT_CONST_VOL') && (value < 0.1 || value > 1)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0.1-1).", es: "Valor ingresado fuera del rango (0.1-1)." };
    }
    if ((address == 'GAS_ESPC_HEAT_CONST_PRE') && (value < 0.1 || value > 1)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0.1-1).", es: "Valor ingresado fuera del rango (0.1-1)." };
    }
    if ((address == 'LIQUID_ESPC_HEAT') && (value < 0.1 || value > 1.5)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0.1-1.5).", es: "Valor ingresado fuera del rango (0.1-1.5)." };
    }
    if ((address == 'SHUT_IN_REP_INTERVAL') && (value < 0 || value > 65535)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-65535).", es: "Valor ingresado fuera del rango (0-65535)." };
    }
    if ((address == 'SHUT_IN_CLOSING_TIME') && (value < 0 || value > 1080)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-1080).", es: "Valor ingresado fuera del rango (0-1080)." };
    }
    if ((address == 'SHUT_IN_OPENING_TIME') && (value < 0 || value > 1080)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-1080).", es: "Valor ingresado fuera del rango (0-1080)." };
    }
    if ((address == 'SHUT_IN_MIN_CLOSED_VALVE_TIME') && (value < 0 || value > 1080)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-1080).", es: "Valor ingresado fuera del rango (0-1080)." };
    }
    if ((address == 'SHUT_IN_MAX_CLOSED_VALVE_TIME') && (value < 0 || value > 1080)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-1080).", es: "Valor ingresado fuera del rango (0-1080)." };
    }
    if ((address == 'SHUT_IN_MIN_OPEN_VALVE_TIME') && (value < 0 || value > 1080)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-1080).", es: "Valor ingresado fuera del rango (0-1080)." };
    }
    if ((address == 'SHUT_IN_MAX_OPEN_VALVE_TIME') && (value < 0 || value > 1080)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-1080).", es: "Valor ingresado fuera del rango (0-1080)." };
    }
    if ((address == 'MAINT_CYCLES_CLOSING_TIME') && (value < 0 || value > 1080)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-1080).", es: "Valor ingresado fuera del rango (0-1080)." };
    }
    if ((address == 'MAINT_CYCLES_OPENING_TIME') && (value < 0 || value > 1080)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-1080).", es: "Valor ingresado fuera del rango (0-1080)." };
    }
    if ((address == 'MAINT_CYCLES_MIN_CLOSED_VALVE_TIME') && (value < 0 || value > 64800)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-64800).", es: "Valor ingresado fuera del rango (0-64800)." };
    }
    if ((address == 'MAINT_CYCLES_MAX_CLOSED_VALVE_TIME') && (value < 0 || value > 64800)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-64800).", es: "Valor ingresado fuera del rango (0-64800)." };
    }
    if ((address == 'MAINT_CYCLES_MIN_OPEN_VALVE_TIME') && (value < 0 || value > 1080)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-1080).", es: "Valor ingresado fuera del rango (0-1080)." };
    }
    if ((address == 'MAINT_CYCLES_MAX_OPEN_VALVE_TIME') && (value < 0 || value > 1080)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-1080).", es: "Valor ingresado fuera del rango (0-1080)." };
    }
    if ((address == 'DEFAULT_UPSTREAM_TEMP') && (value < 0 || value > 100)) {
        payload.buildResult = downlinkBuildResult.error;
        payload.errorMessage = { en: "Entered value out of range (0-100).", es: "Valor ingresado fuera del rango (0-100)." };
    }



    //genero el payload MQTT par el telecomando
    var obj = `{
                        "method":"sendTelemeter",
                        "params":{
                            "$__ENDPOINT": $__VALUE
                        }
                        }`;

    //reemplazo los valores de endpoint y valor 
    obj = obj.replace("$__ENDPOINT", address);
    obj = obj.replace("$__VALUE", value);

    //convierto obj a JSON
    var jsonAsString = JSON.parse(obj);

    payload.setAsJsonObject(jsonAsString);

    switch (command.type) {
        case commandType.management:
            switch (command.management.type) {
                case managementCommandType.setValue:

                    payload.setAsJsonObject(jsonAsString);
                    break;

                default:
                    payload.buildResult = downlinkBuildResult.unsupported;
                    break;
            }
            break;
        default:
            payload.buildResult = downlinkBuildResult.unsupported;
            break;
    }

}