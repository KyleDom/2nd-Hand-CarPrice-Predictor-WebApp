import { BrandModelMap } from "@/types/model";

export const brandData = [
  'Chevrolet', 'Ford', 'Honda', 'Isuzu', 'Hyundai', 'Mitsubishi', 'Nissan',
  'Toyota', 'BMW', 'Mazda', 'Kia', 'Audi', 'Lexus', 'Mercedes-Benz', 'Subaru',
  'Suzuki', 'Jeep', 'Porsche', 'Ssangyong', 'Volkswagen', 'Land Rover', 'Bmw',
  'Chrysler', 'Volvo', 'Dodge', 'Gmc', 'Jaguar', 'Joylong', 'Ferrari', 'Foton',
  'Maserati', 'Cadillac', 'Scion', 'Great Wall', 'King Long', 'Mini', 'Peugeot',
  'Tata', 'Lifan', 'Bentley', 'Lamborghini', 'Infiniti', 'Hummer', 'Byd',
  'Mahindra', 'Aston Martin', 'Lotus'
].sort();

export const modelData: BrandModelMap = 
{
  'Aston Martin': ['DB11'],
  'Audi': ['A1', 'A4', 'A8', 'RS5', 'S3', 'TT'],
  'BMW': [
    '116i', '118D', '118I', '118d', '118i', '120D', '120I', '120d', '218i',
    '316i', '318D', '318I', '318d', '318i', '320D', '320I', '320d', '320i',
    '520D', '520I', '520d', '523I', '523i', '525D', '525I', '525d', '528I',
    '530D', '530d', '530i', '535I', '730D', '730Li', '730d', '740Li', '750',
    '750Li', 'M3', 'X1', 'X3', 'X5', 'X6', 'Z4'
  ],
  'Bentley': ['Continental'],
  'Bmw': ['2008'],
  'Byd': ['F0'],
  'Cadillac': ['ATS', 'CTS', 'Escalade', 'SRX', 'XT5'],
  'Chevrolet': ['300C', 'Captiva', 'Colorado', 'CorvetteStingray', 'Cruze', 'Orlando', 'Spark', 'Suburban', 'Tahoe', 'Trailblazer', 'Traverse'],
  'Chrysler': ['300', '300C', 'Pacifica', 'Town and Country'],
  'Dodge': ['Challenger', 'Durango', 'Journey'],
  'Ferrari': ['458', '488', 'California'],
  'Ford': [
    'E-150', 'EcoSport', 'Ecosport', 'Escape', 'Everest', 'Expedition',
    'Explorer', 'F-150', 'Fiesta', 'Focus', 'Mustang', 'Ranger', 'RangerRaptor', 'Transit'
  ],
  'Foton': ['Thunder', 'Toplander'],
  'Gmc': ['Acadia', 'Sierra', 'Terrain', 'Yukon'],
  'Great Wall': ['Haval'],
  'Honda': [
    'Accord', 'BR-V', 'BRV', 'Brio', 'Brio Amaze', 'BrioAmaze', 'Civic',
    'City', 'CR-V', 'CRV', 'HR-V', 'Jazz', 'Mobilio', 'Odyssey', 'Pilot'
  ],
  'Hummer': ['H2', 'H3'],
  'Hyundai': [
    'Accent', 'Elantra', 'Eon', 'Ertiga', 'Genesis', 'Genesis Coupe', 'Getz',
    'Grand Starex', 'GrandCarnival', 'GrandCherokee', 'H-100', 'H100', 'H350',
    'i10', 'i20', 'i8', 'Ioniq', 'Santa Fe', 'SantaFe', 'Sonata', 'Starex', 'Tucson', 'Veloster'
  ],
  'Infiniti': ['Q50', 'QX80'],
  'Isuzu': ['Crosswind', 'D-Max', 'MU-X', 'Mux'],
  'Jaguar': ['F-Type', 'XE', 'XF', 'XJ', 'XJR', 'XKR'],
  'Jeep': ['Cherokee', 'Compass', 'Grand Cherokee', 'Renegade', 'Wrangler'],
  'Kia': [
    'Carens', 'Carnival', 'Forte', 'Grand Carnival', 'K2500', 'K2700', 'Picanto',
    'Rio', 'Seltos', 'Sorento', 'Soul', 'Sportage', 'Stinger'
  ],
  'King Long': ['Univan'],
  'Lamborghini': ['Aventador', 'Gallardo', 'Huracan', 'Urus'],
  'Land Rover': [
    'Defender', 'Discovery', 'Discovery Sport', 'Range Rover', 'Range Rover Evoque',
    'Range Rover Sport', 'Range Rover Velar'
  ],
  'Lexus': [
    'CT 200h', 'ES', 'ES350', 'GS', 'GX', 'IS', 'IS300', 'IS350', 'LS', 'LS460',
    'LX', 'LX570', 'NX', 'RC', 'RC F', 'RX', 'RX350', 'RX450H'
  ],
  'Lotus': ['Elise', 'Exige'],
  'Mahindra': ['Scorpio'],
  'Maserati': ['Ghibli', 'Levante', 'Quattroporte'],
  'Mazda': ['2', '3', '6', 'BT-50', 'CX-3', 'CX-5', 'CX-7', 'CX-9', 'MX-5'],
  'Mercedes-Benz': [
    'A-Class', 'B-Class', 'C180', 'C200', 'C220', 'C55 AMG', 'CLA', 'CLS',
    'E-Class', 'E200', 'E240', 'E280', 'E300', 'E320', 'E350', 'E55', 'G-Class',
    'G500', 'G63', 'GL450', 'GLA', 'GLC220d', 'GLE', 'GLS', 'M-Class', 'S-Class',
    'S320', 'S350', 'S500', 'S550', 'S60', 'S7', 'SL500', 'Sprinter', 'V-Class', 'V220'
  ],
  'Mini': ['Clubman', 'Cooper', 'Countryman'],
  'Mitsubishi': [
    'Adventure', 'ASX', 'L200', 'L200Fb', 'L300', 'Mirage', 'Mirage G4', 'Mirage GLX',
    'Montero', 'Montero Sport', 'Outlander', 'Pajero', 'Strada', 'Xpander'
  ],
  'Nissan': [
    '350Z', '370Z', 'Almera', 'Altima', 'Apv', 'GT-R', 'Juke', 'Navara',
    'NP300 Navara', 'NV350 Urvan', 'Patrol', 'Sentra', 'Teana', 'Terra', 'X-Trail'
  ],
  'Peugeot': ['2008', '3008', '508'],
  'Porsche': ['911', 'Boxster', 'Cayenne', 'Cayman', 'Macan', 'Panamera'],
  'Ssangyong': ['Actyon', 'Korando', 'Musso', 'Rexton', 'Rodius', 'Tivoli'],
  'Subaru': ['BRZ', 'Forester', 'Impreza', 'Legacy', 'Levorg', 'Outback', 'WRX', 'XV'],
  'Suzuki': ['Alto', 'Celerio', 'Ciaz', 'Ertiga', 'Swift', 'Swift Dzire', 'Vitara'],
  'Tata': ['Manza'],
  'Toyota': [
    '4Runner', '86', 'Alphard', 'Altis', 'Avanza', 'Camry', 'Camry V', 'Coaster',
    'Corolla', 'Corolla Altis', 'FJ Cruiser', 'Fortuner', 'Grandia', 'HiAce',
    'Hiace', 'Hilux', 'Innova', 'Land Cruiser', 'Land Cruiser Prado', 'Previa',
    'Prius', 'RAV4', 'Rush', 'Sequoia', 'Supra', 'Tacoma', 'Tundra', 'Vios', 'Yaris'
  ],
  'Volkswagen': ['Beetle', 'Bora', 'Caddy', 'Golf', 'Jetta', 'Passat', 'Polo', 'Santana', 'Tiguan', 'Touareg'],
  'Volvo': ['S40', 'S60', 'S80', 'S90', 'V40', 'V60', 'V90', 'XC40', 'XC60', 'XC70', 'XC90']
}

export const bodyTypeData = [
  'Saloon / Sedan', 'SUV', 'MPV / AUV', 'Coupe / Sports Car', 'Pickup / Truck',
  'Hatchback / Wagon', 'Van / Minivan / Minibus',
  'Cabriolet / Convertible / Roadster'
].sort();

export const colorData = [
  'No Color', 'Brown', 'White', 'Black', 'Silver', 'Blue', 'Red', 'Grey', 'Beige',
  'Orange', 'Green', 'Purple', 'Yellow', 'Grayblack', 'Brightsilver',
  'Pearlwhite', 'Skyblue', 'Golden', 'Pink', 'Silver / Grey', 'Gold',
  'Purple / Pink'
].sort();

export const transmissionData = [
  'Automatic', 'Shiftable Automatic', 'Manual', 'Automanual', 'Cvt'
]

export const locationData = ['Paranaque', 'Manila', 'Quezon City', 'Makati', 'Legazpi', 'Norzagaray',
'Antipolo', 'Cebu City', 'Caloocan', 'Angeles', 'Las Pinas', 'Davao City',
'Agoo', 'Carmona', 'Tarlac City', 'San Fernando', 'San Juan', 'Lemery',
'Compostela', 'Calumpit', 'Taguig', 'Santiago', 'Cagayan de Oro', 'Liloan',
'Marikina', 'Muntinlupa', 'Lucena', 'Mandaue', 'Nabua', 'Imus', 'Bacoor',
'Calamba', 'Pasig', 'Dolores', 'Cainta', 'Pasay', 'Bacolod', 'Valenzuela',
'Santa Teresita', 'Alaminos', 'Agdangan', 'San Jose del Monte', 'Taytay',
'Danao', 'Cabuyao', 'San Pablo', 'Baguio', 'Santa Rosa', 'Talisay', 'Mexico',
'Santa Maria', 'Gapan', 'Mandaluyong', 'Lipa', 'Los Banos', 'Noveleta',
'Navotas', 'Binan', 'Candelaria', 'San Mateo', 'Plaridel', 'Arayat',
'Roxas City', 'Pozorrubio', 'Koronadal', 'Dumaguete', 'Ibaan', 'Meycauayan',
'Malolos', 'San Jose de Buenavista', 'Marilao', 'Tabaco', 'General Trias',
'Dasmarinas', 'Silang', 'Pililla', 'Tuguegarao', 'San Pascual', 'Tanauan',
'Lapu-Lapu', 'San Manuel', 'Trece Martires', 'Malabon', 'General Santos',
'Pilar', 'San Francisco', 'San Pedro', 'Olongapo', 'Santo Tomas',
'General Salipada K. Pendatun', 'Rosario', 'Batangas City', 'Baliuag',
'Rodriguez', 'Tagaytay', 'Cavite City', 'Nasugbu', 'Cabanatuan', 'Quirino',
'Zarraga', 'Abuyog', 'Vigan', 'Aborlan', 'Malinao', 'San Joaquin', 'Magalang',
'Matungao', 'Lamut', 'Baco', 'Buguey', 'Presentacion', 'Bantay', 'Aparri',
'Aguinaldo', 'Batad', 'Guagua', 'Zamboanga City', 'Toledo', 'Valencia', 'Looc',
'Amadeo', 'Leyte', 'Munoz', 'Porac', 'General Mariano Alvarez', 'Abra de Ilog',
'Pulilan', 'Pateros', 'Binangonan', 'Daet', 'Mendez', 'Butuan', 'Balanga',
'Pagadian', 'Bayambang', 'Malaybalay', 'Tudela', 'Pinamalayan', 'San Carlos',
'Calauag', 'Binalonan', 'Dagupan', 'Daraga', 'Tagbilaran', 'Floridablanca',
'Iriga', 'La Trinidad', 'Bacolor', 'Balagtas', 'Kidapawan', 'Tantangan',
'Maramag', 'Lingayen', 'Pandi', 'Kawit', 'San Dionisio', 'Iligan', 'Bustos',
'Reina Mercedes', 'Santa Rita', 'San Jose', 'Sagay', 'Quezon', 'San Isidro',
'San Nicolas', 'Bocaue', 'San Simon', 'Tayabas', 'Indang', 'Concepcion',
'Tayug', 'Puerto Galera', 'Mapandan', 'San Rafael', 'San Antonio', 'Urdaneta',
'Aguilar', 'Roxas', 'Angat', 'Angono', 'San Quintin', 'Cabagan', 'Iloilo City',
'Leganes', 'Guiguinto', 'Mabalacat', 'Polangui', 'Alubijid', 'Ambaguio',
'Balabac', 'Burgos', 'Abulug', 'Santo Domingo', 'Naga', 'Malvar', 'Balete',
'Teresa', 'Aringay', 'Santa Fe', 'Apalit', 'Bauan', 'Tanza', 'Minalin', 'Pila',
'Taal', 'Capas', 'Orion', 'Ilagan', 'Jaen', 'Consolacion', 'Macabebe',
'Santa Barbara', 'Santa Ana', 'Anilao', 'Balayan', 'Samal', 'Morong', 'Limay',
'Calaca', 'Zaragoza', 'Tanay', 'San Jacinto', 'Tiaong', 'Subic', 'Pakil',
'Ternate', 'Bacacay', 'San Luis', 'Sumilao', 'Obando', 'Tuba', 'Guinobatan',
'Catbalogan', 'Bulakan', 'Lubao', 'Orani', 'Pili', 'Caraga', 'Iguig',
'Balingasag', 'Akbar', 'Balaoan', 'Pavia', 'Bula', 'Santa Lucia', 'Baybay',
'Palayan', 'San Ildefonso', 'Calapan', 'Cabiao', 'Bacong', 'Ormoc', 'Calasiao',
'Hagonoy', 'Catarman', 'Calauan', 'Bay', 'Panglao', 'Ozamiz', 'Aglipay',
'Malabuyoc', 'Saguday', 'Badiangan', 'Esperanza', 'Alfonso', "Brooke's Point",
'Kalilangan', 'Igbaras', 'Dipolog', 'Bamban', 'Dao', 'Oton', 'Cauayan',
'Sariaya', 'Jasaan', 'Luna', 'Kitaotao', 'Villaba', 'Adams', 'Carmen',
'Malitbog', 'Bagabag', 'Alicia', 'Allen', 'Basista', 'Tacurong', 'Rizal',
'Tagum', 'Bato', 'Maasin', 'Gerona', 'Pagsanjan', 'Mariveles', 'Agoncillo',
'Echague', 'Camaligan', 'Ligao', 'Tacloban', 'Laoag',
'General Emilio Aguinaldo', 'Baler', 'Aliaga', 'El Nido', 'Manapla', 'Amlan',
'Balangkayan', 'Malasiqui', 'Dinalungan', 'Bogo', 'Polanco', 'Atok', 'Pandag',
'Bago', 'Alimodian', 'Cuyapo', 'Ajuy', 'Mabini', 'Pulupandan', 'Panganiban',
'Alcoy', 'Labo', 'Padre Garcia', 'La Paz', 'Argao', 'Paniqui', 'Digos',
'Vinzons', 'Palo', 'Canlaon', 'Cuenca', 'Lucban', 'Bayombong', 'Paombong',
'Pangil', 'Jones', 'Binmaley', 'Manaoag', 'Minglanilla', 'Naic', 'Dauis',
'Alangalang', 'Sorsogon City', 'San Leonardo', 'General Luna', 'Talavera',
'Libon', 'Almagro', 'Agno', 'Isabela City', 'Castillejos', 'Cabatuan',
'Rosales', 'Catmon', 'Tubao', 'Kapatagan', 'Prosperidad', 'Sampaloc', 'Dauin',
'Alcala', 'Cordova', 'Santa Cruz', 'Linamon', 'Gandara', 'Pangutaran',
'Magallanes', 'Alabat', 'Borongan', 'Paete', 'Dimasalang', 'Cabugao',
'Pio Duran', 'Aloguinsan', 'Goa', 'Antipas', 'Carranglan', 'Kadingilan',
'Balasan', 'Barbaza', 'Cagayancillo', 'Datu Blah T. Sinsuat', 'Kibungan',
'Kiblawan', 'Corella', 'Baras', 'Jamindan', 'Barobo', 'President Roxas',
'Balangiga', 'Mallig', 'Gabaldon', 'Alfonso Castaneda', 'Sebaste', 'Bongao',
'Dumanjug', 'Hinigaran', 'Silay', 'Lian', 'Calbayog', 'Kolambugan', 'Laur',
'Tublay', 'Mangaldan', 'Pagudpud', 'Palompon', 'Gumaca', 'Bais', 'Oroquieta',
'Caba', 'Puerto Princesa', 'Santa Ignacia', 'Laoac', 'Surigao City', 'Lugait',
'Murcia', 'Umingan', 'Libertad', 'Mataasnakahoy', 'Gregorio del Pilar',
'Philippines', 'Davao', 'Cebu', 'Cavite', 'Tarlac', 'Batangas', 'Iloilo'].sort()
