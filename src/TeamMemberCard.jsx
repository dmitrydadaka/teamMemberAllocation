import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

const TeamMemberCard = ({ employee, handleEmployeeCardClick, selectedTeam }) => {
    return (
        <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam) ? 
            'card m-2 standout': 'card m-2'}
            onClick={handleEmployeeCardClick}>
            {(employee.gender === 'male') ? <img src={maleProfile}
                alt="maleProfile" className='card-img-top'
                style={{ cursor: 'pointer' }}
                /> :
                <img src={femaleProfile} alt="femaleProfile"
                    className='card-img-top' style={{ cursor: 'pointer' }} />
            }
            <div className='card-body'>
                <h5 className='card-title'>Full Name: {employee.fullName}</h5>
                <p className='card-text'> <b> Designation: </b> {employee.designation} </p>
            </div>
        </div>
    )
}

export default TeamMemberCard;