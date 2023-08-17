import Feedback from './Feedback/index.jsx';
// import FeedbackOptions from './FeedbackOptions/index.jsx';
// import Statistics from './Statistics/index.jsx';
import Section from './Section/index.jsx';
// import Notification from './Notification/index.jsx';

export const App = () => {
  return (
    <div>
      <Section title="Please leave feedback">
        <Feedback />
      </Section>
    </div>
  );
};
