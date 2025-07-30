import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Dashboard } from "@/components/Dashboard";
import { NetflixManager } from "@/components/NetflixManager";
import { MoneyManager } from "@/components/MoneyManager";
import { Settings } from "@/components/Settings";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderActiveTab = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "netflix":
        return <NetflixManager />;
      case "money":
        return <MoneyManager />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          {renderActiveTab()}
        </div>
      </main>
    </div>
  );
};

export default Index;
