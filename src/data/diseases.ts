import { Disease } from '../types';

export const commonDiseases: Disease[] = [
  {
    id: 'd1',
    name: 'Common Cold',
    description: 'A viral infection of the upper respiratory tract that primarily affects the nose and throat.',
    causes: ['Rhinovirus', 'Coronavirus', 'Respiratory syncytial virus', 'Parainfluenza virus'],
    symptoms: ['Runny nose', 'Congestion', 'Sore throat', 'Cough', 'Sneezing', 'Mild fever', 'Fatigue'],
    treatments: ['Rest', 'Staying hydrated', 'Over-the-counter pain relievers', 'Decongestants', 'Throat lozenges'],
    prevention: ['Regular handwashing', 'Avoiding close contact with sick people', 'Not touching face with unwashed hands', 'Strengthening immune system with healthy diet and exercise'],
    emergencyLevel: 'low'
  },
  {
    id: 'd2',
    name: 'Influenza (Flu)',
    description: 'A contagious respiratory illness caused by influenza viruses that infect the nose, throat, and sometimes the lungs.',
    causes: ['Influenza A virus', 'Influenza B virus', 'Influenza C virus'],
    symptoms: ['Fever', 'Chills', 'Cough', 'Sore throat', 'Runny nose', 'Muscle pain', 'Headache', 'Fatigue'],
    treatments: ['Rest', 'Staying hydrated', 'Antiviral medications (for severe cases)', 'Over-the-counter pain relievers', 'Prescription medications'],
    prevention: ['Annual flu vaccination', 'Regular handwashing', 'Avoiding close contact with sick people', 'Covering coughs and sneezes'],
    emergencyLevel: 'medium'
  },
  {
    id: 'd3',
    name: 'COVID-19',
    description: 'A respiratory illness caused by the SARS-CoV-2 virus that can cause a range of symptoms from mild to severe.',
    causes: ['SARS-CoV-2 virus'],
    symptoms: ['Fever', 'Cough', 'Shortness of breath', 'Fatigue', 'Muscle pain', 'Headache', 'Loss of taste or smell', 'Sore throat'],
    treatments: ['Rest', 'Staying hydrated', 'Over-the-counter pain relievers', 'Antiviral medications (for eligible cases)', 'Oxygen therapy (for severe cases)'],
    prevention: ['COVID-19 vaccination', 'Wearing masks in high-risk settings', 'Regular handwashing', 'Maintaining physical distance in crowded areas'],
    emergencyLevel: 'medium'
  },
  {
    id: 'd4',
    name: 'Migraine',
    description: 'A neurological condition characterized by recurrent, severe headaches often accompanied by other symptoms.',
    causes: ['Genetic factors', 'Hormonal changes', 'Stress', 'Certain foods and additives', 'Environmental factors'],
    symptoms: ['Severe headache (often one-sided)', 'Pulsating pain', 'Sensitivity to light and sound', 'Nausea', 'Vomiting', 'Visual disturbances'],
    treatments: ['Pain relievers', 'Triptans', 'Anti-nausea medications', 'Preventive medications', 'Lifestyle changes', 'Stress management'],
    prevention: ['Identifying and avoiding triggers', 'Regular sleep schedule', 'Stress management', 'Regular meals', 'Staying hydrated'],
    emergencyLevel: 'low'
  },
  {
    id: 'd5',
    name: 'Gastroenteritis',
    description: 'Inflammation of the stomach and intestines, typically resulting from a viral or bacterial infection.',
    causes: ['Norovirus', 'Rotavirus', 'E. coli', 'Salmonella', 'Food poisoning'],
    symptoms: ['Diarrhea', 'Nausea', 'Vomiting', 'Abdominal cramps', 'Fever', 'Headache', 'Fatigue'],
    treatments: ['Staying hydrated', 'Electrolyte solutions', 'Bland diet', 'Rest', 'Medications to reduce diarrhea'],
    prevention: ['Regular handwashing', 'Safe food handling', 'Clean drinking water', 'Avoiding undercooked foods'],
    emergencyLevel: 'medium'
  },
  {
    id: 'd6',
    name: 'Pneumonia',
    description: 'An infection that inflames the air sacs in one or both lungs, which may fill with fluid.',
    causes: ['Bacteria', 'Viruses', 'Fungi', 'Aspiration of food or liquid'],
    symptoms: ['Cough with phlegm', 'Fever', 'Chills', 'Shortness of breath', 'Chest pain when breathing', 'Fatigue', 'Confusion (especially in older adults)'],
    treatments: ['Antibiotics (for bacterial pneumonia)', 'Antiviral medications (for viral pneumonia)', 'Fever reducers', 'Cough medicine', 'Hospitalization (for severe cases)'],
    prevention: ['Vaccination', 'Good hygiene', 'Not smoking', 'Strong immune system'],
    emergencyLevel: 'high'
  },
  {
    id: 'd7',
    name: 'Urinary Tract Infection (UTI)',
    description: 'An infection in any part of the urinary system, including the kidneys, bladder, ureters, and urethra.',
    causes: ['Bacteria (especially E. coli)', 'Fungi', 'Viruses (rare)'],
    symptoms: ['Pain when urinating', 'Frequent urination', 'Feeling the need to urinate despite empty bladder', 'Cloudy or strong-smelling urine', 'Pelvic pain (in women)', 'Rectal pain (in men)'],
    treatments: ['Antibiotics', 'Pain relievers', 'Increased fluid intake', 'Avoiding irritants like alcohol and caffeine'],
    prevention: ['Drinking plenty of water', 'Urinating after sexual activity', 'Wiping from front to back (for women)', 'Avoiding irritating feminine products'],
    emergencyLevel: 'medium'
  },
  {
    id: 'd8',
    name: 'Hypertension (High Blood Pressure)',
    description: 'A common condition where the force of blood against artery walls is consistently too high.',
    causes: ['Genetics', 'Age', 'Obesity', 'Lack of physical activity', 'High sodium diet', 'Smoking', 'Alcohol consumption'],
    symptoms: ['Usually no symptoms (hence "silent killer")', 'Headaches (in severe cases)', 'Shortness of breath', 'Nosebleeds', 'Flushing', 'Dizziness'],
    treatments: ['Lifestyle changes', 'Diuretics', 'ACE inhibitors', 'Angiotensin II receptor blockers', 'Calcium channel blockers', 'Beta-blockers'],
    prevention: ['Regular exercise', 'Healthy diet low in sodium', 'Limiting alcohol', 'Not smoking', 'Maintaining healthy weight', 'Managing stress'],
    emergencyLevel: 'medium'
  },
  {
    id: 'd9',
    name: 'Acute Appendicitis',
    description: 'Inflammation of the appendix that causes severe abdominal pain and requires immediate medical attention.',
    causes: ['Blockage in appendix lining', 'Infection', 'Inflammatory bowel disease'],
    symptoms: ['Sudden pain that begins around navel and shifts to lower right abdomen', 'Pain that worsens with movement', 'Nausea', 'Vomiting', 'Loss of appetite', 'Low-grade fever', 'Abdominal swelling'],
    treatments: ['Appendectomy (surgical removal of appendix)', 'Antibiotics', 'Pain management'],
    prevention: ['No known prevention methods', 'Early recognition and treatment is key'],
    emergencyLevel: 'high'
  },
  {
    id: 'd10',
    name: 'Tension Headache',
    description: 'The most common type of headache characterized by dull, aching head pain, tightness across the forehead, or tenderness on the scalp, neck, and shoulders.',
    causes: ['Stress', 'Poor posture', 'Eye strain', 'Fatigue', 'Skipping meals', 'Dehydration', 'Inadequate sleep'],
    symptoms: ['Dull, aching head pain', 'Tightness or pressure across the forehead or on both sides of the head', 'Tenderness in scalp, neck, and shoulder muscles', 'Mild sensitivity to light or sound'],
    treatments: ['Over-the-counter pain relievers', 'Relaxation techniques', 'Stress management', 'Biofeedback', 'Massage', 'Applying heat or cold'],
    prevention: ['Identifying and avoiding triggers', 'Maintaining good posture', 'Regular exercise', 'Regular sleep schedule', 'Staying hydrated', 'Regular meals'],
    emergencyLevel: 'low'
  }
];