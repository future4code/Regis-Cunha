import { useState, useEffect } from "react";
import axios from "axios";

const useRequestData = (url) => {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

}

export default useRequestData