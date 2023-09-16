import { useState } from 'react'
import Form from '../Form'
import Equipo from '../Equipo'
import btn from '../../assets/btn_add.png'
const Organizazacion = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [employees, setEmployees] = useState([{ name: "Miguel", job: "Desarrollo", photo: "kevin.png", team: "Programacion" },
    { name: "Miguel", job: "Desarrollo", photo: "kevin.png", team: "Front End" },
    { name: "Andres", job: "Desarrollo Web", photo: "kevin.png", team: "Front End" },
{ name: "Miguel", job: "Desarrollo", photo: "kevin.png", team: "Data Science" }]);
    const addEmployees = (employee) => {
        setEmployees([...employees, employee]);
    };
    const deleteEmployee = (position,team) => {
        let resultTeam=employees.filter(employee=>employee.team===team).filter((_,index)=>index!==position);
        let resultEmployees=employees.filter(employee=>employee.team!==team).concat(resultTeam);
        console.log(`Se eliminara el componente ${position} del team ${team}`)
        console.log(resultEmployees);
        setEmployees(resultEmployees);
    }
    const teams = [
        {
            title: "Programacion",
            mainColor: "#57C278",
            secondaryColor: "#D9F7E9",
        },
        {
            title: "Front End",
            mainColor: "#82CFFA",
            secondaryColor: "#E8F8FF",
        },
        {
            title: "Data Science",
            mainColor: "#A6D157",
            secondaryColor: "#F0F8E2",
        },
        {
            title: "DevOps",
            mainColor: "#E06B69",
            secondaryColor: "#FDE7E8",
        },
        {
            title: "UX/UI",
            mainColor: "#DB6EBF",
            secondaryColor: "#FAE9F5",
        },
        {
            title: "Movil",
            mainColor: "#FFBA05",
            secondaryColor: "#FFF5D9",
        },
        {
            title: "Innovacion y Gestión",
            mainColor: "#FF8A29",
            secondaryColor: "#FFEEDF",
        }
    ]
    const viewForm = () => {
        setIsFormVisible(!isFormVisible)
    }
    return (
        <>
            {isFormVisible && <section className='py-px'><Form title="Rellena el formulario para crear el colaborador." options={teams.map(team => team.title)} event={addEmployees}  /></section>}
            <section className="flex flex-col gap-8">
                <div className="flex items-center justify-evenly w-11/12 mx-auto my-16 lg:w-3/5">
                    <h2 className="font-prata  text-indigo-500/95 text-2xl font-medium pb-2 border-b-2 border-indigo-500/95 lg:text-4xl lg:pb-4 lg:border-b-4">Mi organizazacion</h2>
                    <img className="w-16  hover:cursor-pointer lg:w-20 " onClick={viewForm} src={btn} alt="add_colaborator" />
                </div>
            </section>
            {
                teams.map(item => <Equipo key={item.title} data={item} event={deleteEmployee} employees={employees.filter(employee => employee.team === item.title)}/>)
            }
        </>
    )
}
export default Organizazacion;