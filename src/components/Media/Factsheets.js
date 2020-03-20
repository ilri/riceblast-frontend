import React from 'react';
import Appbar from '../Appbar/Appbar';
import Agronomy from './Factsheets/Agronomy';
import Pests from './Factsheets/Pests';
import PhysiologicalDisorders from './Factsheets/PhysiologicalDisorders';
import PostHarvest from './Factsheets/PostHarvest';
import Weeds from './Factsheets/Weeds';
import Diseases from './Factsheets/Diseases';
import {downloadFactsheet} from './Factsheets/DowloadFactSheet';






export default function Factsheets(props){
    const handleDownload = (factSheet, factSheetName) => () => {
      downloadFactsheet(factSheet,factSheetName);
    };
    return(
        <div>
            <div>
                <Appbar props={props} />
            </div>

            
            <div >
              <Agronomy handleDownload={handleDownload} />
            </div>

            <div >
              <Pests handleDownload={handleDownload} />
            </div>

            <div>
              <PhysiologicalDisorders handleDownload={handleDownload} />
            </div>

            <div>
              <Diseases handleDownload={handleDownload} />
            </div>

            <div>
              <PostHarvest handleDownload={handleDownload} />
            </div>

            <div>
              <Weeds handleDownload={handleDownload} />
            </div>
        </div>
    )
}