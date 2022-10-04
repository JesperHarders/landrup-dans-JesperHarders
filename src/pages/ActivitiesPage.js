import ActivityCards from "../componenter/ActivityCards";
import Menu from "../componenter/Menu";
import PageHeading from "../componenter/PageHeading";

const ActivitiesPage = () => {
    return (
        <div className="bg-purple p-[30px]">
            <div className="mb-[30px]">
                <PageHeading text='Aktiviteter'/>
            </div>
            <ActivityCards/>
            <Menu/>
        </div>
    );
}
 
export default ActivitiesPage;