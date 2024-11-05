import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Dashboard = () => {
    return (
        <div>
            <div className="bg-purple-600 p-10 text-white text-center">
                <h2 className="text-2xl font-semibold">Dashboard</h2>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div>
                    <Tabs>
                      <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                      </TabList>
                   
                     {/* <TabPanel>
                        <h2>Any content 1</h2>
                      </TabPanel>
                      <TabPanel>
                        <h2>Any content 2</h2>
                      </TabPanel> */}
                    </Tabs>
                </div>
            </div>

            <div>
                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </div>

        </div>
    );
};

export default Dashboard;