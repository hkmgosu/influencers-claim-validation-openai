export const generatePrompt = (influencer: string, claim: string) => {
    return `
      You are an expert in health and wellness. Your task is to evaluate the following health claim made by an online influencer called "${influencer}":
      
      Claim: "${claim}"
  
      Please provide a detailed analysis of the claim, including:
      1. who is the influencer and the relation with the claim.
      2. verify if the claim was made by the influencer in any source.
      3. The validity of the claim of the influencer made and the date.
      4. Relevant scientific research or studies that support or refute the claim.
      5. Any additional context or caveats that should be considered.
  
      Provide the information in a clear and concise manner, citing credible sources where applicable, iN LESS 1000 CHARACTERS,  and Transform it into HTML components and add strong element just for highlight important topic in the response with calipso color as css in the strong label.
    `;
  };