import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useDataContext } from "../../provider/dataProvider";
import { useNavigate } from 'react-router-dom'

interface Props {
  TYPE: object
}

export function Graph() {

  const navigate = useNavigate()
  const { table } = useDataContext()
  const [data, setData] = useState<Array<string | number>>([])

  useEffect(() => {
    if(table.length === 0) {
      navigate('/')
    }
  }, [table.length, navigate])

  useEffect(() => {
    const spentType = getTypes()
    spentCount(spentType)
  }, [])


  function getTypes() {
    let newArr: Array<object> = [{}]
    table.forEach((el: Props) => (
      newArr.push(el['TYPE'])
    ))
    return newArr
  }


  function spentCount(spentType: Array<object>) {
    let count = spentType.reduce((allTypes: any, types: any) => {
      if (types in allTypes) {
        allTypes[types]++;
      }
      else {
        allTypes[types] = 1;
      }
      return allTypes;
    })

    let newArray: Array<string | any> = Object.entries(count)
    newArray.unshift(["Spent", "Type"])
    setData(newArray)
  }


  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={{
        backgroundColor: 'none',
        is3D: true,
      }}
      width={"100%"}
      height={"400px"}
    />
  );
}