import axios from 'axios';
import * as React from 'react';
import useMount from "react-use/esm/useMount";
import {ConnpassEvent} from "./model/model";
import {Card, CardContent} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/es/CardActions";
import Button from "@material-ui/core/Button";
import Truncate from "react-truncate";
const axiosJsonpAdapter = require("axios-jsonp");

const App = () => {
  // eslint-disable-next-line
  const [events, setEvents] = React.useState<ConnpassEvent[]>([]);

  useMount(() => {
    axios.get('https://connpass.com/api/v1/event/?count=5',{
      adapter: axiosJsonpAdapter,
    })
      .then((res)=> {
        setEvents(res.data.events)
      })

    // axios.get('https://connpass.com/api/v1/event/?count=5',{
    //   headers: {
    //     // 'Content-Type': 'application/json;charset=utf-8',
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Access-Control-Allow-Origin': '*',
    //   },
    // })
    //   .then((res) => {
    //     console.log(res);
    //     setEvents(res.data);
    //   })
  });

  const createDescriptionMarkUp = (value: any) => {
    return {
      __html: value
    }
  };

  const handleClickToLink = (value: string) => {
    window.location.href = value
  };

  const renderEventDateTime = (value: Date): string => {
    return `${new Date(value).getMonth() + 1}月${new Date(value).getDate()}日`
  };

  return (
    <>
      {events.map((event, index) => (
        <Card key={`card_${index}`}>
          <CardContent>
            <Typography variant={'h5'} component={'h5'}>
              {event.title}
            </Typography>
            <Typography color={'textSecondary'}>
              {renderEventDateTime(event.started_at)} {event.hash_tag && `/ ${event.hash_tag}`}
            </Typography>
            <Typography color={"textPrimary"}>
              <Truncate lines={3}>
                <span dangerouslySetInnerHTML={createDescriptionMarkUp(event.description)} />
              </Truncate>
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={()=>handleClickToLink(event.event_url)}>
              もっと見る
            </Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default App;
