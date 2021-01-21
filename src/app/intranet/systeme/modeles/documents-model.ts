export interface DocumentModel{
    _id?:any;
    date?:any;
    dublincore:DocDublinModel;
    gps?:DocGpsModel;
    media:DocMediaModel;
    nemateria:NemateriaModel;
}
export interface DocDublinModel {
    contributor?: string;
    coverage?: string;
    creator:string | Array<string>;
    date?: string;
    description?:string;
    format?: string;
    identifier?: string;
    language?: string;
    publisher?: string;
    relation?: string;
    rights?: string;
    source?: string;
    subject?:string | Array<string>;
    title?: string;
    type?: string;
}
export interface DocGpsModel {
    lattitude:number | string;
    longitude:number | string;
    altitude:number | string;
}
export interface DocMediaModel {
    format: string;
    imageHeight?:number;
    imageSize?:string;
    imageWidth?:number;
    slicesGroupName:string;
    sourceFile:string;
    file:string;
}
export interface NemateriaModel{
    collection?:NemaCollectionModel;
    document:NemaDocumentModel;
    informateur?:NemaInformateurModel | Array<NemaInformateurModel>;
    participants?:NemaParticipantModel | Array<NemaParticipantModel>;
    relations?:NemaRelationsModel | Array<NemaRelationsModel>;
    sequences?:NemaSequencesModel | Array<NemaSequencesModel>;
    serie?:NemaSerieModel;
}
export interface NemaInformateurModel{
    alias_informateur:string;
    competence_informateur:string;
    date_naissance_informateur?:string;
    informateur:string;
}
export interface NemaDocumentModel{
    identifiant_unique:string;
    reference_original?:string;
    uri:string;
    url:string;
    sourceFile:string;
    conditions_acces?:string;
    conservateur_fichiers?:string;
    date_creation_original?:string;
    date_numerisation?:string;
    detenteur_droits?:string;
    nature_support_original?:string;
}
export interface NemaCollectionModel{
    nom_collection:string;
    proprietaire_originaux?:string;
    qui_numerise?:string;
    gestionnaire_collection?:string;
    detenteur_droits?:string;
    conservateur_originaux?:string;
    conservateur_fichiers?:string;
    fonds?:string;
}
export interface NemaParticipantModel{
    editeur_oeuvre_source?:string;
    editeur_site?:string;
    participants:string;
    producteurs?:string;
}
export interface NemaRelationsModel{
    contient_elements?:string | Array<string>;
    liens_docs_externes?:string | Array<string>;
    liens_docs_internes:string | Array<string>;
    requiert_documents?:string | Array<string>;
}
export interface NemaSequencesModel{
    duree_sequence:string;
    marques_evenements?:string | Array<string>;
    mots_cles_sequences:string | Array<string>;
    resume_sequence?:string;
    sequence:string;
    time_code:string | number;
}
export interface NemaSerieModel{
    serie:string;
    serie_parent?:string;
    ordre_serie:string | number;
}

export class NemaDocument implements DocumentModel{
    dublincore = new NemaDublin();
    gps = new NemaGPS();
    media = new NemaMedia();
    nemateria = new Nema();
}

export class NemaDublin implements DocDublinModel{
    contributor: '';
    coverage: '';
    creator:'';
    date: '';
    description:'';
    format: '';
    identifier: '';
    language: '';
    publisher: '';
    relation:'';
    rights:'';
    source:'';
    subject:'';
    title:'';
    type:'';
}

export class NemaGPS implements DocGpsModel{
    lattitude:0; longitude:0; altitude:0;
}

export class NemaMedia implements DocMediaModel {
    format: ''; imageHeight:0; imageSize:''; imageWidth:0; slicesGroupName:''; sourceFile:''; file:''
}

export class Nema implements NemateriaModel{
    collection = {nom_collection:'', proprietaire_originaux:'', qui_numerise:'', gestionnaire_collection:'', detenteur_droits:'', conservateur_originaux:'', conservateur_fichiers:'', fonds:''};
    document = {identifiant_unique:'', reference_original:'', uri:'', url:'', sourceFile:'', conditions_acces:'', conservateur_fichiers:'', date_creation_original:'', date_numerisation:'', detenteur_droits:'',nature_support_original:''};
    informateur:{alias_informateur:'',competence_informateur:'',date_naissance_informateur:'',informateur:''};
    participants:{editeur_oeuvre_source:'',editeur_site:'',participants:'',producteurs?:''};
    relations:{contient_elements:'',liens_docs_externes:'',liens_docs_internes:'',requiert_documents:''};
    sequences:{duree_sequence:'', marques_evenements:'', mots_cles_sequences:'',resume_sequence:'', sequence:'', time_code:''};
    serie = {serie:'', serie_parent:'', ordre_serie:0};
}
