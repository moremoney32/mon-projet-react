import "./notifications.css";
export const Notifications = () => {
      return (
            <div className="notifications">
                <h2>Conversations</h2>
                  <div className="parent-bloc-notifications">
                        <div className="parent-bloc-notifications-left">
                            <input type="text"placeholder="Rechercher" />
                            <span></span>
                            
                              
                        </div>
                        <div className="parent-bloc-notifications-right">
                              <div className="parent-bloc-notifications-right1"></div>
                              <div className="parent-bloc-notifications-right2"></div>
                        </div>
                  </div>
            </div>
      );
};
