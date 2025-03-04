import Navigation from "../../components/layout/Navigation"

const Dashbord = () => {
  return (
    <>
    <div className="flex flex-col h-[100vh] bg-primary/20">
    <Navigation />
      <div className=" justify-center flex-col border">
        <h1 className="heading">Anti-Corruption and Finace management</h1>
        <h3 className="sub-heading">Dashboard</h3>
      </div>
    </div>
    </>
  )
}

export default Dashbord