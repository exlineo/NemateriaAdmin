export interface DocumentModel{
    _id?:any;
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
    time_code:string;
}
export interface NemaSerieModel{
    serie:string;
    serie_parent?:string;
    ordre_serie:string | number;
}