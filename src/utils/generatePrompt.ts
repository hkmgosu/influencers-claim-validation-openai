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
  
      Provide the information in a clear and concise manner, citing credible sources where applicable, iN LESS 1000 CHARACTERS, and Transform it into HTML elements.
      For ul html add this class "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"and por the li html elements add this class bg-white rounded-lg shadow-md overflow-hidden",
      and for the inside li element use this template "
        <img src="https://via.placeholder.com/150" alt="Card Image" class="w-full h-48 object-cover">
        <div class="p-4">
            <h2 class="text-lg text-black font-semibold">--- here is the topic detailed analysis title question---</h2>
            <p class="text-gray-700">----This is a description for card using claim analysis detailed answer ---</p>
        </div>" es child element for li html element. Use Card Title (--- here is the topic detailed analysis title question---) for the claim responses topics and the p element (description for card in the template), 
        is for the description of the detailed analysis topics.
    `;
  };