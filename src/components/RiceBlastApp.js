import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Appbar from './Appbar/Appbar';
import Home from './Home/Home';
import Login from './Login/Login';
import About from './About/About';
import Newsletters from './Media/Newsletters';
import Meetings from './Media/Meetings';
import Stakeholders from './Media/Stakeholders';
import Publications from './Publications/Publications';
import Factsheets from './Media/Factsheets';
import ResourceDashboard from './Resources/ResourceDashboard';
import RiceBlastLabs from './Resources/RiceBlastLabs/RiceBlastLabs';
import CollectionSite from './Resources/CollectionSites/CollectionSites';
import Isolate from './Resources/Isolates/Isolates';
import RiceGenotype from './Resources/RiceGenotype/RiceGenotype';
import RiceGenes from './Resources/RiceGene/RiceGene';
import FGScreenResults from './Resources/FGScreenResults/FGSScreenResults';
import RGScreenResults from './Resources/RGScreenResults/RGScreenResults';
import PathotypingResults from './Resources/PathotypingResults/PathotypingResults';
import VCGGroups from './Resources/VCGGroups/VCGGroups';
import RiceSmall from './Resources/RiceSmall/RiceSmall';
import FungalSmall from './Resources/FungalSmall/FungalSmall';
import VCGResults from './Resources/VCGResults/VCGResults';
import Protocols from './Resources/Protocol/Protocol'
import RiceGBS from './Resources/RiceGBS/RiceGBS'
import FungalGBS from './Resources/FungalGBS/FungalGBS'
import People from './Resources/People/People';



export default function RiceBlastApp(props){
    return(

        <div>


            <div>
                <Router>
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/about' exact component={About} />
                        <Route path='/media/newsletters' exact component={Newsletters} />
                        <Route path='/media/stakeholder_engagements' exact component={Stakeholders} />
                        <Route path='/media/meetings' exact component={Meetings} />
                        <Route path='/media/factsheets' exact component={Factsheets} />
                        <Route path='/publications' exact component={Publications} />
                        {/* URLS FOR RESOURCES */}
                        <Route path='/resources/dashboard' exact component={ResourceDashboard} />
                        <Route path='/resources/sites' exact component={CollectionSite} />
                        <Route path='/resources/labs' exact component={RiceBlastLabs} />
                        <Route path='/resources/isolates' exact component={Isolate} />
                        <Route path='/resources/rice_genotypes' exact component={RiceGenotype} />
                        <Route path='/resources/rice_genes' exact component={RiceGenes} />
                        <Route path='/resources/rice_gene_screen_results' exact component={RGScreenResults} /> 
                        <Route path='/resources/fungal_gene_screen_results' exact component={FGScreenResults} />
                        <Route path='/resources/pathotyping_results' exact component={PathotypingResults} />
                        <Route path='/resources/vcg_groups' exact component={VCGGroups} />
                        <Route path='/resources/rice_small__dna_fragments_sequence' exact component={RiceSmall} />
                        <Route path='/resources/fungal_small__dna_fragments_sequence' exact component={FungalSmall} />
                        <Route path='/resources/vcg_test_results' exact component={VCGResults} />
                        <Route path='/resources/protocols' exact component={Protocols} />
                        <Route path='/resources/rice_gbs' exact component={RiceGBS} />
                        <Route path='/resources/fungal_gbs' exact component={FungalGBS} />
                        <Route path='/resources/people' exact component={People} />
                    </Switch>
                </Router>
            </div>
        </div>
    )
}