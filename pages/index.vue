<template>
    <NuxtLayout contentonly>
        <template #default>
            <h1 class="text-3xl my-6">CGI Geoscience Vocabularies</h1>
            <p>For the description of geological features, geological time, mineral occurrences, and mining-related features.</p>
            <h4>Vocabularies for GeoSciML and EarthResourceML</h4>
            <ul class="list-disc ml-8">
                <li><NuxtLink to="/vocabularies">GeoSciML & EarthResourceML Vocabularies</NuxtLink></li>
            </ul>
            <h4>Vocabularies for Geological Time - the ICS international stratigraphic timescale</h4>
            <ul class="list-disc ml-8">
                <li><a href="https://vocabs.ardc.edu.au/viewById/196">Geological Timescale service - landing page</a></li>
                <li><a href="https://vocabs.ardc.edu.au/repository/api/lda/csiro/international-chronostratigraphic-chart/geologic-time-scale-2020/collection">CGI geological time vocabulary service</a></li>
                <li><a href="https://github.com/CGI-IUGS/timescale-data/tree/master/rdf/">Vocabulary files for the International Stratigraphic Chart</a> (RDF, TTL, HTML)</li>
                <li><a href="https://stratigraphy.org/timescale/">International Stratigraphic Chart, Interactive version</a></li>
            </ul>
            <hr class="border-secondary border-[1px] my-2" />
            <h2 class="text-2xl my-4">Modelling & Tools</h2>
            <h4>Vocabulary Modelling</h4>
            <p>CGI conceives of <em>vocabularies</em> as being synonymous with the <em><a href="https://www.w3.org/TR/skos-reference/">Simple Knowledge Organization System (SKOS)</a></em>'s <code>skos:ConceptScheme</code> class, so each CGI vocab is an instance of <code>skos:ConceptScheme</code>. All the individual terms within vocabs - instances of <code>skos:Concept</code> - are also presented in a flat list per vocabulary: a <code>skos:Collection</code>.</p>
            <h4>Profiles</h4>
            <p>The content of all vocabs in this system can be accessed individually in web page (HTML) and machine-readable forms. Each list of vocabs, vocabulary and Concept web page contains a link to the listing of all profiles and formats available for that object. Look for the <b><em>Alternate Profiles</em></b> hyperlink.</p>
            <h4>Services</h4>
            <p>All of the vocabularies in this system are accessible via a single SPARQL endpoint which can be used to query for any content in this system:</p>
            <ul class="list-disc ml-8">
                <li><NuxtLink to="/sparql">SPARQL Endpoint</NuxtLink></li>
            </ul>
            <h4>System Code</h4>
            <p>The code for this vocabulary publication system - Prez - is available online: </p>
            <ul class="list-disc ml-8">
                <li><a href="https://github.com/RDFLib/prez">Prez</a></li>
                <li><a href="https://github.com/RDFLib/prez-ui">Prez UI</a></li>
            </ul>
            <p>Note that this particular instance of Prez contains some configuration and styling that isn't present in that main Prez repositories</p>
        </template>
    </NuxtLayout>
</template>