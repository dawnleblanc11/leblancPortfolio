import React from "react";
//import { PDFDownloadLink, Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
// Create styles
// const styles = StyleSheet.create({
//   page: {
//     flexDirection: 'row',
//     backgroundColor: '#E4E4E4'
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1
//   }
// });

// Create Document Component
// const MyDoc = () => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <View style={styles.section}>
//         <Text>Section #1</Text>
//       </View>
//       <View style={styles.section}>
//         <Text>Section #2</Text>
//       </View>
//     </Page>
//   </Document>
// );

function Resume() {
  return (
    <section className="my-5">
      <h1 id="resume">Resume</h1>
      <div className="my-2">
        <h3> Click to Download Dawn LeBlanc's resume </h3>
          
    {/* <PDFDownloadLink document={<MyDoc />} fileName="../../src/assets/DLeBlanc_resume.pdf">
      {/* {({ blob, url, loading, error }) =>
        loading ? 'Loading document...' : 'Download now!'
      } */}
    {/* </PDFDownloadLink> */}
  </div>
      
    </section>
  );
}

export default Resume;