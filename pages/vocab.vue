<script lang="ts" setup>
type CGIVocabRegister = {
    collection: {
        iri: string;
        label: string;
    };
    vocab: {
        iri: string;
        label: string;
    };
};

const geosciVocabs: CGIVocabRegister[] = [
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/alterationtype", label: "Alteration Type" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/alterationtype", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/boreholedrillingmethod", label: "Borehole Drilling Method" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/boreholedrillingmethod", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/compositioncategory", label: "Composition Category" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/compositioncategory", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/compoundmaterialconstituentpartrole", label: "Compound Material Constituent Part" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/compoundmaterialconstituentpartrole", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/consolidationdegree", label: "Consolidation Degree" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/consolidationdegree", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/contacttype", label: "Contact Type" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/contacttype", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/conventioncode", label: "Convention Code for Strike and Dip Measurements" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/conventioncode", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/deformationstyle", label: "Deformation Style" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/deformationstyle", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/descriptionpurpose", label: "Description Purpose" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/descriptionpurpose", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/determinationmethodorientation", label: "Determination Method Orientation" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/determinationmethodorientation", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/eventenvironment", label: "Event Environment" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/eventenvironment", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/eventprocess", label: "Event Process" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/eventprocess", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/faultmovementsense", label: "Fault Movement Sense" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/faultmovementsense", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/faultmovementtype", label: "Fault Movement Type" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/faultmovementtype", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/faulttype", label: "Fault Type" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/faulttype", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/featureobservationmethod", label: "Feature Observation Method" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/featureobservationmethod", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/foliationtype", label: "Foliation Type" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/foliationtype", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/geneticcategory", label: "Genetic Category" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/geneticcategory", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/geologicunitmorphology", label: "Geologic Unit Morphology" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/geologicunitmorphology", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/geologicunitpartrole", label: "Geologic Unit Part Role" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/geologicunitpartrole", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/geologicunittype", label: "Geologic Unit Type" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/geologicunittype", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/lineationtype", label: "Lineation Type" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/lineationtype", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/mappedfeatureobservationmethod", label: "Mapped Feature Observation Method" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/mappedfeatureobservationmethod", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/mappingframe", label: "Mapping Frame" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2017.01/mappingframe", label: "v2017.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/metamorphicfacies", label: "Metamorphic Facies" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/metamorphicfacies", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/metamorphicgrade", label: "Metamorphic Grade" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/metamorphicgrade", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/particleaspectratio", label: "Particle Aspect Ratio" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/particleaspectratio", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/particleshape", label: "Particle Shape" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/particleshape", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/particletype", label: "Particle Type" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/particletype", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/planarpolaritycode", label: "Planar Polarity Code" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2017.01/planarpolaritycode", label: "v2017.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/proportionterm", label: "Proportion Term" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/proportionterm", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/lithology", label: "Simple Lithology" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/simplelithology", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/stratigraphicrank", label: "Stratigraphic Rank" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/stratigraphicrank", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/valuequalifier", label: "Value Qualifier" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/valuequalifier", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/vocabularyrelation", label: "Vocabulary Relation" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/vocabularyrelation", label: "v2016.01" },
    },
];

const earthResourceVocabs: CGIVocabRegister[] = [

    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/classification-method-used", label: "Classification Method Used" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/classification-method-used", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/commodity-code", label: "Commodity Code" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/commodity-code", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/deposit-model", label: "Deposit Model" },
        vocab: { iri: "http://resource.geosciml.org/classifier/cgi/deposit-model", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/earth-resource-expression", label: "Earth Resource Expression" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/earth-resource-expression", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/earth-resource-form", label: "Earth Resource Form" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.02/earth-resource-form", label: "v2016.02" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/earth-resource-material-role", label: "Earth Resource Material Role" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/earth-resource-material-role", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/earth-resource-shape", label: "Earth Resource Shape" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/earth-resource-shape", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/end-use-potential", label: "End Use Potential" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/end-use-potential", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/environmental-impact", label: "Environmental Impact" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/environmental-impact", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/exploration-activity-type", label: "Exploration Activity Type" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/exploration-activity-type", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/exploration-result", label: "Exploration Result" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/exploration-result", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/mineral-occurrence-type", label: "Mineral Occurrence Type" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/mineral-occurrence-type", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/mine-status", label: "Mine Status" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/mine-status", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/mining-activity", label: "Mining Activity" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/mining-activity", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/mining-processing-activity", label: "Processing Activity" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/mining-processing-activity", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/raw-material-role", label: "Raw Material Role" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/raw-material-role", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/reserve-assessment-category", label: "Reserve Assessment Category" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/reserve-assessment-category", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/resource-assessment-category", label: "Resource Assessment Category" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/resource-assessment-category", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/unfc", label: "UNFC Code" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2019.01/unfc", label: "v2016.01" },
    },
    {
        collection: { iri: "http://resource.geosciml.org/classifier/cgi/waste-storage", label: "Waste Storage" },
        vocab: { iri: "http://resource.geosciml.org/classifierscheme/cgi/2016.01/waste-storage", label: "v2016.01" },
    },

];
</script>

<template>
    <NuxtLayout contentonly>
        <template #default>
            <h1 class="text-3xl my-6">CGI Vocabularies Register</h1>
            <p>This is the static register (index) of CGI's vocabularies whose purpose is to present the persistent URIs
                to each of the vocabularies.</p>
            <p>For machine-readable versions of this vocabulary list, see the <NuxtLink
                    to="/catalogs?_profile=altr-ext:alt-profile">Alternate Profiles</NuxtLink> page.</p>
            <h3 class="text-xl my-4">GeoSciML Vocabularies</h3>
            <table>
                <thead>
                    <tr>
                        <th class="text-left">Collection of terms</th>
                        <th>Concept Schemes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in geosciVocabs">
                        <td>
                            <NuxtLink :to="`/object?uri=${item.collection.iri}`">{{ item.collection.label }}</NuxtLink>
                        </td>
                        <td class="text-center">
                            <NuxtLink :to="`/object?uri=${item.vocab.iri}`">{{ item.vocab.label }}</NuxtLink>
                        </td>
                    </tr>
                </tbody>
            </table>
            <h3 class="text-xl my-4">EarthResourceML Vocabularies</h3>
            <table>
                <thead>
                    <tr>
                        <th class="text-left">Collection of terms</th>
                        <th>Concept Schemes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in earthResourceVocabs">
                        <td>
                            <NuxtLink :to="`/object?uri=${item.collection.iri}`">{{ item.collection.label }}</NuxtLink>
                        </td>
                        <td class="text-center">
                            <NuxtLink :to="`/object?uri=${item.vocab.iri}`">{{ item.vocab.label }}</NuxtLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </template>
    </NuxtLayout>
</template>
