import Sidebar from '@/components/Sidebar'
import './globals.css'

async function getStudent() {
  const res = await fetch(`http://localhost:3000/api/students`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function RootLayout({ children }) {
  const studentData = await getStudent();
  return (
    <html lang="en">
      
      <head />
      <body className='flex flex-row' >                     
        <div className='basis-1/4 bg-slate-500 ' >
          <Sidebar studentList = {studentData.data} />
        </div>
            <main  className='p-5 basis-3/4'>   
                       
              {children}
            </main>
          
        
        
        </body>
    </html>
  )
}
