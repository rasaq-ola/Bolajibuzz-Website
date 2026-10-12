import Words from '@/components/Words';
import ContactForm from '@/components/ContactForm';
export const metadata = { title: 'Start a Conversation', description: 'Tell us what you are trying to fix.' };
export default function Page() {
  return (
    <>
      <div className="pgh alt"><div className="w"><h1><Words t="Tell us what you are trying to fix." /></h1></div></div>
      <div className="w" style={{ paddingBottom: 90 }}><ContactForm /></div>
    </>
  );
}
