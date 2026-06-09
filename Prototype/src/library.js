//DOI = Digital Object Identifier
//Let_Review = Literature Review
export const Paper = {
    Title: "",
    Author_Affiliations: "",
    Journal_Name: "",
    DOI: "",
    Keywords: [],
    Abstract: "",
    Publication_Year: null,
    URL: "",
    Lit_Review: "",
    Results: "",
    Discussion_Conclusion: "",
    
    showPaper() { 
        console.log(`Title: ${this.Title}`);    
    }
};
export const Note=  {
  
    Title: "",
    timeCreated: null,
    Entry: "",
    showNote() {
      console.log(`Title: ${this.Title}`);
    }
  

}
export const highlightText =  
{
  text: "",
  pageNumber:"",
  showHighlight() {
    console.log(`Highlight: ${this.text} on page ${this.pageNumber}`);
  }
}


