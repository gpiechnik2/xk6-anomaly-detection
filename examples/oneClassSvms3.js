import anomaly from 'k6/x/anomaly'


export default function () {
    const trainingData = [
        // sample data from 0 to 8
		{ x: 6.5111101218056895 },
        { x: 2.5113962586526384 },
        { x: 5.913889159340007 },
        { x: 4.188956660805593 },
        { x: 2.4599938003395874 },
        { x: 3.906821927861591 },
        { x: 5.8767648327997986 },
        { x: 0.6274288486656268 },
        { x: 3.4652784131219043 },
        { x: 4.2569751247276955 },
        { x: 3.115423699539983 },
        { x: 4.889984577692067 },
        { x: 7.397175861502092 },
        { x: 6.171631536233006 },
        { x: 1.4944849241499902 },
        { x: 5.875921572255411 },
        { x: 7.747402564617895 },
        { x: 2.2091255685696574 },
        { x: 6.824783724724098 },
        { x: 2.265308218668066 },
        { x: 1.1882569347470184 },
        { x: 0.5484337805486934 },
        { x: 4.314420452419151 },
        { x: 7.611929327596879 },
        { x: 4.815968407420007 },
        { x: 5.17503242220007 },
        { x: 6.748727710687966 },
        { x: 4.460512149394429 },
        { x: 4.644017986297921 },
        { x: 2.826009036186395 },
        { x: 6.261240983979432 },
        { x: 1.0941626474025696 },
        { x: 6.251720560032171 },
        { x: 0.3381222555895711 },
        { x: 0.26543120530490505 },
        { x: 3.2931961260957117 },
        { x: 7.865348438491019 },
        { x: 1.5934683091006683 },
        { x: 6.909527854410097 },
        { x: 0.9067725646797999 },
        { x: 1.2812804323440368 },
        { x: 4.279229867898792 },
        { x: 6.314269467742784 },
        { x: 5.4487513778298755 },
        { x: 0.5684532761026659 },
        { x: 7.710363666876081 },
        { x: 1.6072758134282399 },
        { x: 3.216312062837721 },
        { x: 4.4195555185160345 },
        { x: 4.055349745873272 }
    ]

    const testData = [
        { x: 6.0, timestamp: "2023-07-17T12:02:00"},
        { x: 39.0, timestamp: "2023-07-17T12:02:00"},
        { x: 14.0, timestamp: "2023-07-17T12:02:00"}
    ]

    const anomalies = anomaly.oneClassSvm(trainingData, testData)

    anomalies.forEach(anomaly => {
        console.log(`New anomaly detected. X: ${anomaly.x}, Y: ${anomaly.y}, Timestamp: ${anomaly.timestamp}`)
    })

    // INFO[0000] New anomaly detected. X: 3, Y: 0, Timestamp: 2023-07-17T12:02:00  source=console
    // INFO[0000] New anomaly detected. X: 1.5, Y: 0, Timestamp: 2023-07-17T12:02:00  source=console
}
