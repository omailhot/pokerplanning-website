import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import Card from "../shared/Card";
import { useEffect, useState } from "react";
import { SessionData } from "../../dto/SessionData";

const Results = () => {
  const { t } = useTranslation();
  const { sessionId, featureId } = useParams();
  const SESSION_URL = import.meta.env.VITE_SESSION_URL;
  const [sessionData, setSessionData] = useState<SessionData>();
  
  const fetchSession = () => {
    fetch(`${SESSION_URL}/${sessionId}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        setSessionData(data);
      });
  };

  useEffect(() => {
    fetchSession();
  }, []);

  const getUsers = (): string => {
    if (!sessionData) return "";
    return sessionData?.users.map((username) => {
      return (
        ` ${username}`
      );
    }).toString();
  };

  const getUsersVote = () => {
    if (!sessionData) return null;
    return sessionData.features[Number(featureId)].userVotes.map((user, index) => {
      return (
        <p key={index}>
          {`${user.name}: ${user.vote}`}
        </p>
      );
    });
  };

  const getVoteAverage = (): number => {
    if (!sessionData) return 0;
    let total = 0;
    sessionData.features[Number(featureId)].userVotes.forEach((user) => {
      total += user.vote;
    });
    return total / sessionData.features[Number(featureId)].userVotes.length;
  };

  const getResults = () => {
    return (
      <div className="flex flex-col ">
        {getUsersVote()}
        <br/>
        <p className="text-lg font-semibold">{t("results.average")}: {getVoteAverage().toPrecision(3)}</p>
        <p className="text-lg font-semibold">{t("results.finalVote")}: {sessionData?.features[Number(featureId)].finalVote}</p>
        <p className="text-lg font-semibold">{t("results.AIVote")}: {sessionData?.features[Number(featureId)].AIVote}</p>
      </div>
    );
  };

  return (
    <div className="block sm:flex">
      {sessionData && (
        <>
          <div className="block min-w-lg sm:max-w-lg max-h-3xl overflow-y-auto p-2 mt-3 mr-3 ml-3 bg-slate-200 dark:bg-slate-700 rounded-lg">
            <h1 className="flex ml-4 mt-4 text-xl text-blue-700 dark:text-slate-50">{t("results.questions")}</h1>
            {sessionData?.features.map((feature, index) => {
              return (
                <Link to={`/${sessionId}/${index}`}>
                  <Card key={index} title={feature.title} isSelected={index === Number(featureId)} />
                </Link>
              );
            })}
          </div><div className="block xl:flex">
            {featureId &&
              <div className="block lg:flex">
                <div className="lg:min-w-sm">
                  <Card title={t("results.votes")} description={getResults()} />
                </div>
                <div className="lg:min-w-sm lg:max-w-xl">
                  <Card title={`${t("features.ai")}: ${sessionData?.features[Number(featureId)].AIVote}`} description={`${sessionData?.features[Number(featureId)].AIDetails}`} />
                </div>
              </div>}
            <div className="block ml-auto xl:min-w-sm xl:max-w-lg">
              <Card title={`${t("results.context")} ${sessionData?.code}`} description={sessionData?.context || t("results.noContext")} />
              <Card title={`${t("results.users")}`} description={getUsers()} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Results;