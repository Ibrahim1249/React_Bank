
import { CChart } from "@coreui/react-chartjs";


function Chart() {
  return (
   <>
     <CChart
            type="pie"
            data={{
              labels: ["Principle", "Interest"],
              datasets: [
                {
                  backgroundColor: ["#41B883", "#E46651"],
                  data: [1000, 250],
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  labels: {
                    color: "green",
                  },
                },
              },
            }}
          />
   </>
  )
}

export default Chart